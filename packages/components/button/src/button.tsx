import { computed, defineComponent } from 'vue'
import { buttonProps } from './buttonTypes'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    const pre = 'soft-btn'
    const classes = computed(() => {
      return {
        [pre]: true,
        [`${pre}-${props.size}`]: props.size,
        [`${pre}-text-${props.type}`]: true,
        [`${pre}-disabled`]: props.disabled,
        [`${pre}-loading`]: props.loading,
        [`${pre}-round`]: props.round,
        [`${pre}-icon-only`]: !slots.default && slots.icon,
        [`${pre}-circle`]: props.circle,
      }
    })
    return () => {
      const { disabled, loading, target } = props
      const buttonProps = {
        disabled,
        class: classes.value,
      }
      const iconNode = slots.icon && !loading ? slots.icon() : <span class="soft-icon-loading"></span>
      if (props.href !== undefined) {
        return (
          <a {...buttonProps} href={props.href} target={target}>
            {iconNode}
            <span>{slots.default?.()}</span>
          </a>
        )
      }
      return (
        <button {...buttonProps}>
          {iconNode}
          <span>{slots.default?.()}</span>
        </button>
      )
    }
  },
})
