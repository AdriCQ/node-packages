import type { IPaginatedData } from '@adricq/common'
import type { AxiosInstance } from 'axios'
import type { IStore } from './types'

function customer(api: AxiosInstance) {
  const baseUrl = '/market/stores'

  return {
    filter: () => api.get<IPaginatedData<IStore>>(baseUrl)
  }
}

export default function (api: AxiosInstance) {
  return {
    customer: customer(api)
  }
}
