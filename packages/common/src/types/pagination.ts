/**
 * @interface IPaginatedData
 */
export interface IPaginatedData<T> {
  readonly data: T[]
  readonly links: {
    first?: string | undefined
    last?: string | undefined
    prev?: string | undefined
    next?: string | undefined
  }
  readonly meta: {
    current_page?: number | undefined
    from?: number | undefined
    path?: string | undefined
    per_page?: number | undefined
    to?: number | undefined
  }
}

/**
 * @interface IPaginationParams
 */
export interface IPaginationParams {
  page?: number | undefined
  paginate?: number | undefined
}

export interface IApiWrapper<T> {
  readonly data: T
  readonly message?: string | undefined
  readonly error?: string | undefined
}
