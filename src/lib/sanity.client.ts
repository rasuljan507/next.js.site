import { createClient, type ClientConfig } from 'next-sanity'

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-06-27', 
  useCdn: false,           
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
}

export const client = createClient(config)