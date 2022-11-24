import { computed, defineComponent } from 'vue'
import { buttonProps } from './buttonTypes'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    const pre = 'soft-btn'

    const classes = computed(() => {
      const { size, type, disabled, loading, round, circle } = props
      const sizeClassNameMap = { large: 'lg', small: 'sm', default: undefined }
      return {
        [pre]: true,
        [`${pre}-${sizeClassNameMap[size ?? 'default']}`]: size,
        [`${pre}-text-${type}`]: true,
        [`${pre}-disabled`]: disabled,
        [`${pre}-loading`]: loading,
        [`${pre}-round`]: round,
        [`${pre}-icon-only`]: !slots.default && slots.icon,
        [`${pre}-circle`]: circle,
      }
    })
    return () => {
      const { disabled, loading, target } = props
      const buttonProps = {
        disabled,
        class: classes.value,
      }
      const iconNode =
        slots.icon && !loading ? (
          <div class="soft-btn-slot">{slots.icon()}</div>
        ) : (
          loading && <div class="soft-btn-icon-loading" />
        )
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
