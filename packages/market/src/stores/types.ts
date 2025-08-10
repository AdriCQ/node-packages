import type { IUser } from '@adricq/common'

export interface IStore {
  readonly id: string
  name: string
  readonly slug: string
  image: string | null
  description: string | null
}

export interface IStoreExtended extends IStore {
  owner?: IUser | null
}
