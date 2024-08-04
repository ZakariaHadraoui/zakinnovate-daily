import {client} from '../../lib/saniti.client'
import { groq } from 'next-sanity'



export const revalidate = 30


export default async function sitemap() {
	const query = groq`*[_type == "post"]{
		... ,
		author->,
		categories[]->,
		
		}`;
	const posts = await client.fetch(query,{revalidate: 60});
	console.log(posts);
	const post = posts.map((item) => {
		console.log(item); 
		return {
		  url: `https://zakinnovate-daily.vercel.app/post/${item.slug.current}`,
		  lastModified: new Date(),
		  changeFrequency: 'monthly',
		  priority: 0.5,
		};
	  });

	return [
	  {
		url: 'https://zakinnovate-daily.vercel.app',
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	  },

	  ...post
	]
  }