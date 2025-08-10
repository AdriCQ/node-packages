import type {
  AxiosError,
  AxiosInterceptorOptions,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import type { TokenHandler } from './tokenHandler'

/**
 * useErrorHandler
 * @param params
 * @returns
 */
export function useErrorHandler(params: ErrorHandlerParams): InterceptorUse {
  const { defaultError, logout, handleError } = params

  return {
    onFulfilled: (response) => response,
    onRejected: (error: AxiosError) => {
      // Unauthenticated
      if (error?.response?.status === 401) {
        logout()
        if (defaultError && defaultError.unauthorized) handleError(defaultError.unauthorized)
      }
      return Promise.reject(error)
    }
  }
}

/**
 * headersInterceptor
 * @param params
 * @returns
 */
export function useHeadersInterceptor(params: {
  appToken: string
  tokenHandler: TokenHandler
}): InterceptorUse<InternalAxiosRequestConfig<unknown>> {
  const { appToken, tokenHandler } = params

  return {
    onFulfilled: async (_request) => {
      let authToken: string | null = null

      if (tokenHandler.get !== undefined) authToken = tokenHandler.get()
      else if (tokenHandler.getPromise !== undefined) authToken = await tokenHandler.getPromise()

      if (!_request.headers['App-Token']) {
        _request.headers['App-Token'] = appToken
      }

      if (!_request.headers['Content-Type']) {
        _request.headers['Content-Type'] = 'application/json'
      }

      if (authToken && authToken.length > 0) {
        /* Check if authorization is set */
        if (!_request.headers['Authorization']) {
          /* Check if the user is authenticated to send Bearer token */
          _request.headers.Authorization = 'Bearer ' + authToken
        }
      }
      return _request
    }
  }
}

export interface ErrorHandlerParams {
  defaultError?: {
    unauthorized: string
  }
  logout: () => void
  handleError: (error: string) => void
}

interface InterceptorUse<V = AxiosResponse<unknown, unknown>> {
  onFulfilled?: ((value: V) => V | Promise<V>) | null
  onRejected?: ((error: AxiosError) => unknown) | null
  options?: AxiosInterceptorOptions
}
