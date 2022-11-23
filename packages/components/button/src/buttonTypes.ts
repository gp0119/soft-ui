import type { PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'default' | 'large' | 'small'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ButtonSize>,
  },
  disabled: Boolean,
  loading: Boolean,
  round: Boolean,
  circle: Boolean,
  href: String,
  target: String,
}
