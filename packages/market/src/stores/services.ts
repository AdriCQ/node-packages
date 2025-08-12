import type { IApiWrapper, IPaginatedData } from '@adricq/common'
import type { AxiosInstance } from 'axios'
import type { IStore, IStoreExtended } from './types'

function customer(api: AxiosInstance) {
  const baseUrl = '/market/stores'

  return {
    filter: () => api.get<IPaginatedData<IStore>>(baseUrl),
    show: (identifier: string, type: 'id' | 'slug' = 'slug') =>
      api.get<IApiWrapper<IStoreExtended>>(`${baseUrl}/by-${type}/${identifier}`)
  }
}

export default function (api: AxiosInstance) {
  return {
    customer: customer(api)
  }
}
