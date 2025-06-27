// Файл: src/lib/sanity.image.ts
import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity.client'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: any) => {
  return imageBuilder.image(source)
}