import { mount } from '@vue/test-utils'
import Row from '../../row/row.vue'
import Col from '../col.vue'

describe('row', () => {
  it('should create', () => {
    const wrapper = mount(Row)
    expect(wrapper.classes()).toContain('soft-row')
  })

  it('should render gutter', () => {
    const wrapper = mount(Row, {
      props: { gutter: 16 },
    })
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toBe('-8px')
    expect(rowElm.style.marginRight).toBe('-8px')
  })

  it('should render justify', () => {
    const wrapper = mount(Row, {
      props: { justify: 'center' },
    })
    expect(wrapper.classes()).toContain('soft-row-justify-center')
  })

  it('should render align', () => {
    const wrapper = mount(Row, {
      props: { align: 'middle' },
    })
    expect(wrapper.classes()).toContain('soft-row-align-middle')
  })
})

describe('col', () => {
  it('should create', () => {
    const wrapper = mount(Col)
    expect(wrapper.classes()).toContain('soft-col')
  })

  it('should render span', () => {
    const wrapper = mount(Col, {
      props: { span: 3 },
    })
    expect(wrapper.classes()).toContain('soft-col-span-3')
  })

  it('should render order', () => {
    const wrapper = mount(Col, {
      props: { order: 3 },
    })
    expect(wrapper.classes()).toContain('soft-col-order-3')
  })

  it('should render offset', () => {
    const wrapper = mount(Col, {
      props: { offset: 3 },
    })
    expect(wrapper.classes()).toContain('soft-col-offset-3')
  })

  it('should render push', () => {
    const wrapper = mount(Col, {
      props: { push: 3 },
    })
    expect(wrapper.classes()).toContain('soft-col-push-3')
  })

  it('should render pull', () => {
    const wrapper = mount(Col, {
      props: { pull: 3 },
    })
    expect(wrapper.classes()).toContain('soft-col-pull-3')
  })

  test('gutter', () => {
    const testComponent = {
      template: `
        <s-row gutter="16">
          <s-col span="12" ref="col" />
        </s-row>
      `,
      components: {
        's-row': Row,
        's-col': Col,
      },
    }
    const wrapper = mount(testComponent)
    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(colElm.style.paddingLeft).toBe('8px')
    expect(colElm.style.paddingRight).toBe('8px')
  })

  test('responsive', () => {
    const testComponennt = {
      template: `
        <s-row>
          <s-col ref="col" span="12" :xs="{ span: 6 }" :sm="{ span: 8 }" :md="{ span: 10 }" :lg="{ span: 12, offset: 2 }" />
        </s-row>
      `,
      components: {
        's-row': Row,
        's-col': Col,
      },
    }
    const wrapper = mount(testComponennt)
    const colElm = wrapper.findComponent({ ref: 'col' })
    expect(colElm.classes()).toContain('soft-col-xs-span-6')
    expect(colElm.classes()).toContain('soft-col-sm-span-8')
    expect(colElm.classes()).toContain('soft-col-md-span-10')
    expect(colElm.classes()).toContain('soft-col-lg-span-12')
    expect(colElm.classes()).toContain('soft-col-lg-offset-2')
  })
})
