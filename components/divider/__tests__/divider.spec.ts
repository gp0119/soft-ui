import { mount } from '@vue/test-utils'
import Divider from '../divider.vue'

describe('divider.vue', () => {
  it('should create', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('soft-divider')
  })
  it('type', () => {
    const wrapper = mount(Divider, {
      props: {
        type: 'vertical',
      },
    })
    expect(wrapper.classes()).toContain('soft-divider-vertical')
  })
  it('dashed', () => {
    const wrapper = mount(Divider, {
      props: {
        dashed: true,
      },
    })
    expect(wrapper.classes()).toContain('soft-divider-dashed')
  })
})
