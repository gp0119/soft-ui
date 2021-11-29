import type { InjectionKey } from 'vue'

export interface LayoutProvider {
  addSider?: (id: string) => void
  removeSider?: (id: string) => void
}

export const layoutProviderKey: InjectionKey<LayoutProvider> = Symbol('layoutProvider')

export const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()
