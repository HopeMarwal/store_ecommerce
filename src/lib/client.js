import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'q6ni03gy',
  dataset: 'production',
  apiVersion: '2022-29-12',
  useCdn: true,
  token: process.env.REACT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);