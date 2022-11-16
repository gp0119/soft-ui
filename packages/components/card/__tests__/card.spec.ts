import { mount } from '@vue/test-utils'
import Card from '../card.vue'

describe('card', () => {
  it('should render test', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>test</p>',
      },
    })
    expect(wrapper.find('p').text()).toBe('test')
  })

  it('should render title', () => {
    const wrapper = mount(Card, {
      props: { title: 'test' },
    })
    expect(wrapper.find('.soft-card-title').text()).toBe('test')
  })

  it('should render insert shadow', () => {
    const wrapper = mount(Card, {
      props: { insert: true },
    })
    expect(wrapper.classes()).toContain('soft-card-insert-shadow')
  })
})
