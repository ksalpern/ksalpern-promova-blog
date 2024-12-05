import { groq } from "next-sanity";

export const POSTS_QUERY = 
// groq`*[_type == "post" && defined(slug)]`;
groq`
 *[_type=='post'] {
  ...,
  author->,
  categories[]->
 } | order(_createdAt desc)[0...3]
 `;

export const POSTS_SLUG_QUERY = 
// groq`*[_type == "post" && defined(slug.current)][]{
//   "params": { "slug": slug.current }
// }`;
groq`
  *[_type=='post' && slug.current == $slug][0] 
  {
   ...,
   author->,
   categories[]->
  }
  `;

export const POST_QUERY = 
// groq`*[_type == "post" && slug.current == $slug][0]`;
groq`
  *[_type=='post']
  {
    slug
  }`;
