/**
 * ------------------------------------------
 *	Models
 * ------------------------------------------
 */

export interface IUser {
  readonly id: string
  name: string
  email: string
  readonly email_verified_at?: string | null
  phone: string
  readonly phone_verified_at?: string | null
}

/**
 * ------------------------------------------
 *	Requests
 * ------------------------------------------
 */

export interface ILoginRequest {
  identifier_type: string
  identifier: string
  password: string
}

export interface IRegisterRequest {
  name: string
  email: string
  phone: string
  password: string
}
