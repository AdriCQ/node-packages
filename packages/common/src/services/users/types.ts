export interface IUser {
  name: string
  email: string | null
  email_verified_at: string | null | undefined
  phone: string
  phone_verified_at: string | null | undefined
  roles: IUserRole[]
}

export enum RoleName {}

export interface IUserRole {
  name: RoleName
}

export interface IUserLoginRequest {
  phone: string
  password: string
}

export interface IUserRegisterRequest {
  name: string
  phone: string
  password: string
  password_confirmation: string
}

export type IUserProfileRequest = Partial<{
  name: string
  email: string
}>

export interface IUserVerifyRequest {
  email: string | undefined
  phone: string | undefined
  token: string
}

export interface IUserSendVerificationRequest {
  email: string | undefined
  phone: string | undefined
}

export interface IUserAuthResponse {
  data: IUser
  token: string
}
