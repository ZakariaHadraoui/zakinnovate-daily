"use client"
import  { useEffect, useState } from 'react'
import { client } from '../../lib/saniti.client';
import urlFor from '@/sanity/lib/image';
import Image from 'next/image';
import { groq } from 'next-sanity';
import Post from './Post';
import ClientSideRoute from './ClientSideRoute';

  function BlogsList() {
	const [posts, setPosts] = useState<any[]>([])
	useEffect(() => {
		const fetchPosts=async()=>{
			const query = groq`*[_type == "post"]{
				... ,
				author->,
				categories[]->,
				
				}`;
				const posts = await client.fetch(query,{revalidate: 60});
				setPosts(posts);
		}
        fetchPosts()
    }, [])
	
	
  return (
	<div className='px-4 md:px-8 lg:px-10 xl:px-32 2xl:px-32'>
		<hr className='border-[#F7AB0A] mb-10'  />
		<div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
			{posts.map((post)=>{
				return(
					<ClientSideRoute route={`/post/${post.slug.current}`}>
						<Post post={post}/>
					</ClientSideRoute>
				)
			})}

		</div>
	</div>
  )
}

export default BlogsList