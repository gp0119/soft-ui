import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import Icon from '../../icon/icon.vue'

describe('button.vue', () => {
  it('should create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('soft-btn-primary')
  })

  it('size', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', size: 'large' },
    })
    expect(wrapper.classes()).toContain('soft-btn-large')
  })

  it('circle', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', circle: true },
    })
    expect(wrapper.classes()).toContain('soft-btn-circle')
  })

  it('round', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', round: true },
    })
    expect(wrapper.classes()).toContain('soft-btn-round')
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', disabled: true },
    })
    expect(wrapper.classes()).toContain('soft-btn-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loading', async () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', loading: true },
    })
    expect(wrapper.classes()).toContain('soft-btn-loading')
    expect(wrapper.findComponent(Icon).exists()).toBeTruthy()
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('href', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', href: 'http://www.baidu.com' },
    })
    expect(wrapper.classes()).toContain('soft-btn-primary')
    expect(wrapper.attributes('href')).toBe('http://www.baidu.com')
  })

  it('square', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary', square: true },
    })
    expect(wrapper.classes()).toContain('soft-btn-square')
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
      slots: {
        default: '按钮',
      },
    })
    expect(wrapper.text()).toBe('按钮')
  })
})
