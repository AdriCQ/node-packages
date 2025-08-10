import type { IApiWrapper } from '@adricq/common/types'
import type { AxiosInstance } from 'axios'
import type {
  IUser,
  IUserLoginRequest,
  IUserRegisterRequest,
  IUserSendVerificationRequest,
  IUserVerifyRequest
} from './types'

function auth(api: AxiosInstance) {
  const path = '/users/auth'

  return {
    current: () => api.post<IApiWrapper<IUser>>(`${path}/current`),
    login: (params: IUserLoginRequest) => api.post<IApiWrapper<IUser>>(`${path}/login`, params),
    register: (params: IUserRegisterRequest) =>
      api.post<IApiWrapper<IUser>>(`${path}/register`, params),
    sendVerificationCode: (params: IUserSendVerificationRequest) =>
      api.post(`${path}/send-verification`, params),
    verifyCode: (params: IUserVerifyRequest) => api.post(`${path}/verify`, params)
  }
}

function service(api: AxiosInstance) {
  return {
    auth: auth(api)
  }
}

export default service
