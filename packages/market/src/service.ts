import offers from './offers/services'
import orders from './orders/services'
import stores from './stores/services'
import type { AxiosInstance } from 'axios'

export function services(api: AxiosInstance) {
  return {
    offers: offers(api),
    orders: orders(api),
    stores: stores(api)
  }
}
