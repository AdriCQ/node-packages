import type { IApiWrapper, IPaginatedData } from '@adricq/common'
import type { AxiosInstance } from 'axios'
import type { IItemCreate, IOrder, IOrderFilter, IOrderItem } from './types'

function customer(api: AxiosInstance) {
  const baseUrl = 'market/orders'

  return {
    filter: (params: IOrderFilter) => api.get<IPaginatedData<IOrder>>(baseUrl, { params }),
    show: (id: string) => api.get<IApiWrapper<IOrder>>(`${baseUrl}/${id}`)
  }
}

function cart(api: AxiosInstance) {
  const baseUrl = 'market/cart'

  return {
    addItem: (item: IItemCreate) =>
      api.post<IApiWrapper<IOrderItem[]>>(`${baseUrl}/add-item`, item),
    get: () => api.get<IApiWrapper<IOrderItem[]>>(baseUrl),
    removeItem: (item: IItemCreate) =>
      api.post<IApiWrapper<IOrderItem[]>>(`${baseUrl}/remove-item`, item),
    set: (items: IItemCreate[]) => api.post<IApiWrapper<IOrderItem[]>>(baseUrl, items),
    validate: () => api.post<IApiWrapper<IOrderItem[]>>(`${baseUrl}/validate`)
  }
}
export default function (api: AxiosInstance) {
  return {
    cart: cart(api),
    customer: customer(api)
  }
}
