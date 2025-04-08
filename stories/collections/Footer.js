/**
 * Footer component
 * @param {Object} props - Component properties
 * @param {boolean} [props.showNavFooter=false] - Whether to show the nav footer
 * @param {Array} [props.navFooterLinks=[]] - Links for the nav footer
 * @param {string} [props.siteName=''] - Name of the site
 * @param {string} [props.footerGrandparent=''] - Grandparent organization name
 * @param {string} [props.footerGrandparentLink=''] - Grandparent organization URL
 * @param {string} [props.footerParent=''] - Parent organization name
 * @param {string} [props.footerParentLink=''] - Parent organization URL
 * @param {string} [props.footerParent2=''] - Secondary parent organization name
 * @param {string} [props.footerParent2Link=''] - Secondary parent organization URL
 * @param {string} [props.siteAddress=''] - Street address
 * @param {string} [props.sitePhone=''] - Phone number
 * @param {string} [props.siteFax=''] - Fax number
 * @param {string} [props.siteEmail=''] - Email address
 * @param {string} [props.siteFacebook=''] - Facebook URL
 * @param {string} [props.siteTwitter=''] - Twitter/X URL
 * @param {string} [props.siteInstagram=''] - Instagram URL
 * @param {string} [props.siteYoutube=''] - YouTube URL
 * @param {string} [props.siteLinkedin=''] - LinkedIn URL
 * @param {number} [props.currentYear=new Date().getFullYear()] - Current year for copyright
 * @param {boolean} [props.useWrapper=false] - Whether to wrap the footer in a wrapper div
 * @returns {string} - The footer HTML
 */
export default function Footer(props) {
  const {
    // Nav footer props (optional)
    showNavFooter = false,
    navFooterLinks = [
      { label: 'Footer Link 1', url: '/#' },
      { label: 'Footer Link 2', url: '/#' },
      { label: 'Protected section', url: '/#', locked: true },
    ],

    // Site organization props
    siteName = '',
    footerGrandparent = '',
    footerGrandparentLink = '',
    footerParent = '',
    footerParentLink = '',
    footerParent2 = '',
    footerParent2Link = '',

    // Contact info props
    siteAddress = '',
    sitePhone = '',
    siteFax = '',
    siteEmail = '',

    // Social media props
    siteFacebook = '',
    siteTwitter = '',
    siteInstagram = '',
    siteYoutube = '',
    siteLinkedin = '',

    // Current year is used for copyright
    currentYear = new Date().getFullYear(),

    // Wrapper option
    useWrapper = false,
  } = props;

  const hasParentLinks = footerParent && footerParentLink;
  const hasGrandparentLinks = footerGrandparent && footerGrandparentLink;
  const hasParent2Links = footerParent2 && footerParent2Link;
  const hasSocialMedia = siteFacebook || siteTwitter || siteInstagram || siteYoutube || siteLinkedin;

  // Build nav footer links HTML if needed
  let navFooterHTML = '';
  if (showNavFooter) {
    const navLinks = navFooterLinks.map(link => {
      const lockIcon = link.locked ? '<span class="icon" data-icon="lock"></span>' : '';
      return `<li><a href="${link.url}" ${link.locked ? 'class="locked"' : ''}>${link.label} ${lockIcon}</a></li>`;
    }).join('');

    navFooterHTML = `
      <nav class="nav-footer full sticky">
        <ul>
          ${navLinks}
        </ul>
      </nav>
    `;
  }

  // Build parent/grandparent links HTML if needed
  let breadcrumbsHTML = '';
  if (hasParentLinks) {
    const grandparentLinkHTML = hasGrandparentLinks ?
      `<li><a href="${footerGrandparentLink}">${footerGrandparent}</a></li>` : '';

    const parent2LinkHTML = hasParent2Links ?
      ` &amp; <a href="${footerParent2Link}">${footerParent2}</a>` : '';

    breadcrumbsHTML = `
      <ul class="footer-breadcrumbs list-unstyled">
        ${grandparentLinkHTML}
        <li><a href="${footerParentLink}">${footerParent}</a>${parent2LinkHTML}</li>
      </ul>
    `;
  }

  // Build address HTML
  const addressHTML = siteAddress ?
    `<span property="streetAddress">${siteAddress}</span><br>` : '';

  // Build phone HTML
  const phoneHTML = sitePhone ?
    `<span class="footer-phone" property="telephone" content="+1 ${sitePhone}">Phone <a href="tel:${sitePhone.replace(/\s/g, '')}">${sitePhone}</a></span>` : '';

  // Build fax HTML
  const faxHTML = siteFax ?
    `<span class="footer-fax" property="faxNumber" content="+1 ${siteFax}">Fax ${siteFax}</span>` : '';

  // Build email HTML
  const emailHTML = siteEmail ?
    `<span class="footer-email" property="email"><a rel="noopener" href="mailto:${siteEmail}">${siteEmail}</a></span>` : '';

  // Build social media links HTML if needed
  let socialMediaHTML = '';
  if (hasSocialMedia) {
    const facebookHTML = siteFacebook ?
      `<li><a class="soc-facebook" href="${siteFacebook}" rel="noopener" aria-label="${siteName} on Facebook"><svg class="icon" width="16" height="16" aria-hidden="true"><use xlink:href="#icon-facebook"></use></svg> Facebook</a></li>` : '';

    const twitterHTML = siteTwitter ?
      `<li><a class="soc-twitter" href="${siteTwitter}" rel="noopener" aria-label="${siteName} on X/Twitter"><svg class="icon" width="16" height="16" aria-hidden="true"><use xlink:href="#icon-twitter-x"></use></svg> X/Twitter</a></li>` : '';

    const instagramHTML = siteInstagram ?
      `<li><a class="soc-instagram" href="${siteInstagram}" rel="noopener" aria-label="${siteName} on Instagram"><svg class="icon" width="16" height="16" aria-hidden="true"><use xlink:href="#icon-instagram"></use></svg> Instagram</a></li>` : '';

    const youtubeHTML = siteYoutube ?
      `<li><a class="soc-youtube" href="${siteYoutube}" rel="noopener" aria-label="${siteName} on YouTube"><svg class="icon" width="16" height="16" aria-hidden="true"><use xlink:href="#icon-youtube"></use></svg> YouTube</a></li>` : '';

    const linkedinHTML = siteLinkedin ?
      `<li><a class="soc-linkedin" href="${siteLinkedin}" rel="noopener" aria-label="${siteName} on LinkedIn"><svg class="icon" width="16" height="16" aria-hidden="true"><use xlink:href="#icon-linkedin"></use></svg> LinkedIn</a></li>` : '';

    socialMediaHTML = `
      <nav class="social" aria-label="${siteName} social media navigation" vocab="">
        <ul>
          ${facebookHTML}
          ${twitterHTML}
          ${instagramHTML}
          ${youtubeHTML}
          ${linkedinHTML}
        </ul>
      </nav>
    `;
  }

  // Create the footer HTML
  const footerHTML = `
    <footer id="footer" class="site-footer">
      ${navFooterHTML}

      <div class="footer-org" typeof="Organization" resource="#siteorg">
        <meta property="parentOrganization" resource="#parentorg" content="University of Notre Dame">

        ${breadcrumbsHTML}

        <p><a href="/" class="site-link" property="url"><span property="name">${siteName}</span></a></p>

        <div class="footer-contacts">
          <p class="contact-info">
            <span class="address" property="address" typeof="PostalAddress">
              ${addressHTML}
              <span property="addressLocality">Notre Dame</span>, <span property="addressRegion">IN</span> <span property="postalCode">46556</span> <span property="addressCountry">USA</span>
            </span>
            ${phoneHTML}
            ${faxHTML}
            ${emailHTML}
          </p>

          ${socialMediaHTML}
        </div>

        <div property="logo" typeof="ImageObject">
          <meta property="url" content="https://static.nd.edu/images/webclips/default/webclip-60.png">
        </div>

        <p class="copyright">
          <a href="https://www.nd.edu/copyright/">&copy; ${currentYear}</a> <a href="https://www.nd.edu">University of Notre Dame</a>
        </p>
      </div>

      <div class="footer-nd" property="parentOrganization" typeof="CollegeOrUniversity" resource="#parentorg">
        <meta property="name" content="University of Notre Dame">
        <a href="https://www.nd.edu/" class="mark-footer" property="url logo" typeof="ImageObject" aria-label="University of Notre Dame">
          <img
            src="https://static.nd.edu/images/marks/gray/ndmark.svg"
            width="250"
            height="60"
            loading="lazy"
            alt="University of Notre Dame"
            property="url"
          >
        </a>

        <div class="footer-parent-links">
          <nav aria-label="Footer links navigation">
            <ul class="footer-links">
              <li><a href="https://search.nd.edu/" aria-label="Search Notre Dame">Search</a></li>
              <li><a href="https://mobile.nd.edu/" aria-label="Notre Dame Mobile App">Mobile App</a></li>
              <li><a href="https://news.nd.edu/" aria-label="Notre Dame News">News</a></li>
              <li><a href="https://events.nd.edu/" aria-label="Notre Dame Events">Events</a></li>
              <li><a href="https://www.nd.edu/visit/" aria-label="Visit Notre Dame">Visit</a></li>
              <li><a href="https://www.nd.edu/about/accessibility/" aria-label="Notre Dame Accessibility Information">Accessibility</a></li>
            </ul>
          </nav>

          <nav class="social" aria-label="Notre Dame social media navigation" vocab="">
            <ul>
              <li>
                <a class="soc-facebook" href="https://www.facebook.com/notredame/" rel="noopener" aria-label="Notre Dame on Facebook">
                  <svg class="icon" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-facebook"></use>
                  </svg> Facebook
                </a>
              </li>
              <li>
                <a class="soc-twitter" href="https://twitter.com/NotreDame/" rel="noopener" aria-label="Notre Dame on X/Twitter">
                  <svg class="icon" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-twitter-x"></use>
                  </svg> X/Twitter
                </a>
              </li>
              <li>
                <a class="soc-instagram" href="https://www.instagram.com/notredame/" rel="noopener" aria-label="Notre Dame on Instagram">
                  <svg class="icon" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-instagram"></use>
                  </svg> Instagram
                </a>
              </li>
              <li>
                <a class="soc-youtube" href="https://www.youtube.com/user/NDdotEDU" rel="noopener" aria-label="Notre Dame on YouTube">
                  <svg class="icon" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-youtube"></use>
                  </svg> YouTube
                </a>
              </li>
              <li>
                <a class="soc-linkedin" href="https://www.linkedin.com/school/university-of-notre-dame/" rel="noopener" aria-label="Notre Dame on LinkedIn">
                  <svg class="icon" width="16" height="16" aria-hidden="true">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg> LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  `;

  // If useWrapper is true, wrap the footer in a div with class "wrapper"
  if (useWrapper) {
    return `<div class="wrapper">${footerHTML}</div>`;
  }

  // Otherwise, return the footer HTML directly
  return footerHTML;
}
