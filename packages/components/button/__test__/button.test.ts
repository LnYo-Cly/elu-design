import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../src/button.vue';
// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'easyest',
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('easyest');
  });
});
