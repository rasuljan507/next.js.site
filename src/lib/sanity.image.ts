import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity.client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: SanityImageSource) => {
  return imageBuilder.image(source)
}