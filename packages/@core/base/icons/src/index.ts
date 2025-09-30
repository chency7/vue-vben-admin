import { createIconifyIcon } from './create-icon';

import './load';

export * from './create-icon';

export * from './lucide';

export type { IconifyIcon as IconifyIconStructure } from '@iconify/vue';
export {
  addCollection,
  addIcon,
  Icon as IconifyIcon,
  listIcons,
} from '@iconify/vue';

/**
 * 动态加载ICONS目录下的svg图标
 */
const SvginfiniteSpinner = createIconifyIcon('svg:infinite-spinner');

export { SvginfiniteSpinner };
