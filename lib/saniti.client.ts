
import {createClient} from 'next-sanity'

export  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID


export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})