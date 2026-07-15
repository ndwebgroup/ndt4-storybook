/**
 * Sidebar alias — makes Button List discoverable under Components/List
 * as well as Components/Buttons.
 *
 * Stories are re-exported explicitly (not `export *`) because Storybook's
 * indexer analyzes this file statically and needs to see the export names.
 * The source of truth is ./Buttons/ButtonList.stories.js — edit there,
 * changes appear in both places. Only `title`, `tags`, and the story
 * names/storyNames below need to be kept in sync by hand.
 */
import meta, {
  Default as CanonicalDefault,
  Small as CanonicalSmall,
  Large as CanonicalLarge,
} from './Buttons/ButtonList.stories.js';

export default {
  ...meta,
  title: 'Components/List/Button List',
  tags: ['stable'], // keep in sync with ./Buttons/ButtonList.stories.js
};

export const Default = CanonicalDefault;

export const Small = CanonicalSmall;
Small.storyName = 'Small Button List';

export const Large = CanonicalLarge;
Large.storyName = 'Large Button List';
