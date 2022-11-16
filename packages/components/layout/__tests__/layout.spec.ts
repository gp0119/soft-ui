import { mount } from '@vue/test-utils'
import Footer from '../footer.vue'
import Header from '../header.vue'
import Main from '../main.vue'
import Sider from '../sider.vue'
import Layout from '../layout.vue'

describe('layout', () => {
  test('has no sider', () => {
    const testComponent = {
      template: `
          <s-layout>
            <s-header>header</s-header>
            <s-main >main</s-main>
            <s-footer>footer</s-footer>
          </s-layout>
      `,
      components: {
        's-layout': Layout,
        's-header': Header,
        's-main': Main,
        's-footer': Footer,
      },
    }
    const wrapper = mount(testComponent)
    expect(wrapper.classes('soft-layout-has-sider')).toBe(false)
  })
  test('has sider', () => {
    const testComponent = {
      template: `
          <s-layout>
            <s-sider>sider</s-sider>
            <s-main >main</s-main>
          </s-layout>
      `,
      components: {
        's-layout': Layout,
        's-main': Main,
        's-sider': Sider,
      },
    }
    const wrapper = mount(testComponent)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes('soft-layout-has-sider')).toBe(true)
    })
  })
})

describe('header', () => {
  test('height', () => {
    const testComponent = {
      template: `
          <s-layout>
            <s-header :height="100">header</s-header>
            <s-main >main</s-main>
          </s-layout>
      `,
      components: {
        's-layout': Layout,
        's-header': Header,
        's-main': Main,
      },
    }
    const wrapper = mount(testComponent)
    const headerElm = wrapper.find('.soft-layout-header').element as HTMLElement
    expect(getComputedStyle(headerElm).getPropertyValue('--layoutHeaderHeight')).toBe('100px')
  })
})

describe('sider', () => {
  test('width', () => {
    const testComponent = {
      template: `
          <s-layout>
            <s-sider :width="200">sider</s-sider>
            <s-main >main</s-main>
          </s-layout>
      `,
      components: {
        's-layout': Layout,
        's-main': Main,
        's-sider': Sider,
      },
    }
    const wrapper = mount(testComponent)
    const siderElm = wrapper.find('.soft-layout-sider').element as HTMLElement
    expect(getComputedStyle(siderElm).getPropertyValue('--layoutSiderWidth')).toBe('200px')
  })
})

describe('footer', () => {
  test('height', () => {
    const testComponent = {
      template: `
          <s-layout>
            <s-header>header</s-header>
            <s-main >main</s-main>
            <s-footer :height="100">footer</s-footer>
          </s-layout>
      `,
      components: {
        's-layout': Layout,
        's-header': Header,
        's-main': Main,
        's-footer': Footer,
      },
    }
    const wrapper = mount(testComponent)
    const footerElm = wrapper.find('.soft-layout-footer').element as HTMLElement
    expect(getComputedStyle(footerElm).getPropertyValue('--layoutFooterHeight')).toBe('100px')
  })
})
