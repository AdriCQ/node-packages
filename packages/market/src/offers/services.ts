import type { IApiWrapper, IPaginatedData } from '@adricq/common'
import type { AxiosInstance } from 'axios'
import type { IOffer, IOfferFilter } from './types'

function customer(api: AxiosInstance) {
  const baseUrl = 'market/offers'

  return {
    filter: (params: IOfferFilter) => api.get<IPaginatedData<IOffer>>(baseUrl, { params }),
    show: (id: string) => api.get<IApiWrapper<IOffer>>(`${baseUrl}/${id}`)
  }
}

export default function (api: AxiosInstance) {
  return {
    customer: customer(api)
  }
}
