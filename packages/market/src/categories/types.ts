export interface ICategory {
  readonly id: string
  readonly slug: string | null
  name: string
  image: string | null
  is_global: boolean
}

/**
 * ------------------------------------------
 *	Requests
 * ------------------------------------------
 */

export interface ICategoryCreateRequest {
  name: string
  slug: string | null
  image: string | File | null
  store_id: string | null
}

export type ICategoryUpdateRequest = Partial<ICategoryCreateRequest>
