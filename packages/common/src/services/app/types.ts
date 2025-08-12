export interface IApplication {
  id: string
  name: string
  version: string
  version_code: number
  description: string
  image: string | null
  created_at: string | null
  updated_at: string | null
}
