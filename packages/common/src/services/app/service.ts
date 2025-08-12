import type { IApiWrapper } from '@adricq/common/types'
import type { AxiosInstance } from 'axios'
import type { IApplication } from './types'

export function appService(api: AxiosInstance) {
  const path = '/apps'

  return {
    current: () => api.post<IApiWrapper<IApplication>>(`${path}/current`),
    checkForUpdates: () => api.get<IApiWrapper<IApplication>>(`${path}/check-for-updates`),
    url: (appId: string) => api.get(`${path}/download/${appId}`)
  }
}
