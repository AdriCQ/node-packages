import offers from './offers/services'
import stores from './stores/services'
import type { AxiosInstance } from 'axios'

export function services(api: AxiosInstance) {
  return {
    offers: offers(api),
    stores: stores(api)
  }
}
