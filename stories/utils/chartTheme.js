/**
 * Chart theming for Chart.js — resolves NDT4 brand colors and light/dark
 * mode surface colors so charts match the rest of the kit automatically.
 *
 * Chart.js draws to canvas, so it can't read CSS custom properties or
 * light-dark() the way the rest of the site does. This module bridges the
 * gap: brand palette hexes are read directly (they're flat values, not
 * light-dark() themselves), while surface colors (axis text, gridlines,
 * tooltip background) are resolved by measuring a hidden probe element
 * styled with the same light-dark() rules the rest of the site uses —
 * the same technique as resolveTokens.js, applied to computed color
 * instead of design tokens.
 */

const BRAND_VARS = {
  brandBlue: '--brand-blue',
  brandBlueLight: '--brand-blue-light',
  brandBlueBright: '--brand-blue-bright',
  brandBlueDark: '--brand-blue-dark',
  brandGold: '--brand-gold',
  brandGoldLight: '--brand-gold-light',
  brandGoldBright: '--brand-gold-bright',
  brandGoldDark: '--brand-gold-dark',
  brandGreen: '--brand-green',
  brandGreenBright: '--brand-green-bright',
  brandGreenDark: '--brand-green-dark',
  skyBlue: '--sky-blue',
  skyBlueDark: '--sky-blue-dark',
  warmWhite: '--warm-white',
  grayLight: '--gray-light',
  grayExtraLight: '--gray-extra-light',
};

/** Read a raw (mode-independent) custom property off :root. */
function cssVar(name, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

/** Resolve a used-value color that depends on light-dark()/color-scheme. */
function probeColor(cssText, fallback) {
  const probe = document.createElement('span');
  probe.style.cssText = `position:absolute; visibility:hidden; pointer-events:none; ${cssText}`;
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  return resolved || fallback;
}

/**
 * Ordered categorical palette for multi-series charts. Alternates brand
 * hues before dipping into tints, so a 3-series chart reads as
 * blue/gold/green rather than three shades of the same color.
 */
export function getChartPalette() {
  return [
    cssVar(BRAND_VARS.brandBlueBright, '#1c4f8f'),
    cssVar(BRAND_VARS.brandGold, '#ae9142'),
    cssVar(BRAND_VARS.brandGreen, '#0a843d'),
    cssVar(BRAND_VARS.skyBlueDark, '#c1cddd'),
    cssVar(BRAND_VARS.brandGoldLight, '#ddc278'),
    cssVar(BRAND_VARS.brandBlueLight, '#143865'),
    cssVar(BRAND_VARS.brandGreenBright, '#35b36a'),
    cssVar(BRAND_VARS.brandGoldBright, '#d39f10'),
  ];
}

/** Full theme object: palette + surface colors resolved for the current mode. */
export function getChartTheme() {
  return {
    palette: getChartPalette(),
    text: probeColor('color: light-dark(var(--gray-dark), var(--gray-extra-light));', '#333'),
    subtext: probeColor('color: light-dark(var(--gray), var(--sky-blue-dark));', '#555'),
    grid: probeColor('color: light-dark(var(--gray-extra-light), var(--brand-blue-light));', '#f1f2f4'),
    surfaceBg: probeColor('color: light-dark(#fff, var(--brand-blue-dark));', '#fff'),
    tooltipBg: probeColor('color: light-dark(var(--brand-blue), var(--gray-extra-extra-light));', '#0c2340'),
    tooltipText: probeColor('color: light-dark(#fff, var(--brand-blue));', '#fff'),
    fontFamily: cssVar('--font-default', 'GP, "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif'),
  };
}

/**
 * Re-run `onChange` whenever the page's color scheme changes — covers
 * Storybook's dark-mode toggle (which adds/removes a class on <body> or
 * <html>) and the OS-level prefers-color-scheme media query. Returns a
 * cleanup function.
 */
export function watchChartTheme(onChange) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleMediaChange = () => onChange(getChartTheme());
  mediaQuery.addEventListener('change', handleMediaChange);

  const observer = new MutationObserver(() => onChange(getChartTheme()));
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });

  return () => {
    mediaQuery.removeEventListener('change', handleMediaChange);
    observer.disconnect();
  };
}
