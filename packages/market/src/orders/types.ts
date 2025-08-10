import type { ICustomer, IOffer, IStore } from '../main'

export interface IOrder {
  readonly id: string
  status: OrderStatus
  customer: ICustomer
  store: IStore
  items_price: number
  items: IOrderItem[]
  delivery: IOrderDelivery
  created_at: null | string
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELED = 'canceled'
}

export interface IOrderItem {
  offer: IOffer
  quantity: number
  price: number
}

export interface IOrderDelivery {
  recipient: string
  address: string
  phone: string
  status: DeliveryStatus
  notes: string | null
}

export enum DeliveryStatus {
  Completed = 'completed',
  Cancelled = 'cancelled',
  Failed = 'failed',
  Pending = 'pending',
  Delivering = 'delivering'
}

/**
 * ------------------------------------------
 *	Requests
 * ------------------------------------------
 */
export interface IOrderCreate {
  store_id: string
  address: string
  phone: string
  recipient: string
  items: IItemCreate[]
}

export interface IItemCreate {
  offer_id: string
  quantity: number
}
