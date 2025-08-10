import type { ICategory } from './types'

export default function (count: number = 10): ICategory[] {
  const data: ICategory[] = []

  for (let i = 0; i < count; i++) {
    data.push({
      id: `cat${i}`,
      image: 'https://picsum.photos/128',
      is_global: true,
      name: `${i} Category`,
      slug: `cat-${i}`
    })
  }
  return data
}
