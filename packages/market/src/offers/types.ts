import type { IPaginationParams } from '@adricq/common'
import type { ICategory } from '@adricq/market/categories/types'

export interface IOffer {
  readonly id: string
  readonly slug: string
  image: string | null
  name: string
  description: string | null
  category: ICategory
  stock: number
  price: number
  rating: number
}

export interface IOfferExtended {
  readonly id: string
  readonly slug: string
  image: string | null
  gallery: string[] | null
  name: string
  description: string | null
  category: ICategory
  stock: number
  price: IOfferPrice
  rating: number
}

export interface IOfferPrice {
  sell: number
  inversion: number | null | undefined
  discount: number | null | undefined
  reseller: number | null | undefined
}

/**
 * ------------------------------------------
 *	Requests
 * ------------------------------------------
 */

export interface IOfferFilter extends IPaginationParams {
  search?: string
  category?: string
  customer_id?: string
}
