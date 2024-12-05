import { client } from './client'
import ImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = ImageUrlBuilder(client)

function urlFor (source: SanityImageSource) {
  return builder.image(source)
}

export default urlFor
