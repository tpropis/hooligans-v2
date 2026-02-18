import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
});

export const queries = {
  events: `*[_type=="event" && isActive==true] | order(sortOrder asc){
    title,
    dayOfWeek,
    time,
    details,
    badge,
    sortOrder
  }`,
};
