// for volar
import Icon from './components/icon/src/icon.vue';
import Button from './components/button/src/button.vue';
import Badge from './components/badge/src/badge.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EluIcon: typeof Icon;
    'elu-icon': typeof Icon;
    EluButton: typeof Button;
    'elu-button': typeof Button;
    EluBadge: typeof Badge;
    'elu-badge': typeof Badge;
  }
}
export {};
