import type { IStore } from './types'

export default function (count: number = 10): IStore[] {
  const data: IStore[] = []

  for (let i = 0; i < count; i++) {
    data.push({
      id: `store${i}`,
      image: 'https://picsum.photos/128',
      description: `Store ${i} description text for some informaion data`,
      name: `Store ${i} name extensive`,
      slug: `store-${i}`
    })
  }
  return data
}
