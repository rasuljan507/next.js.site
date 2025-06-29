import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity.env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});