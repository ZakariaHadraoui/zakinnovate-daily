import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../lib/saniti.client';
import Image from 'next/image';
import urlFor from '@/sanity/lib/image';
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents';

type props ={
	params:{
		slug:string
	}
}

async function PostPage({params:{slug}}:props) {
	const query = groq`*[_type == "post" && slug.current == $slug][0]{
		... ,
		author->,
		categories[]->,
		
	}`;
const post = await client.fetch(query, { slug, revalidate: 60 });
console.log(post);
  return (
	<article className='px-10 pb-28'>
		<section className='space-y-2 border border-blue-500 text-white'>
			<div className='relative min-h-48 flex flex-col md:flex-row justify-between'>
				<div className='absolute top-0 h-full w-full opacity-10 blur-sm p-10'>
					<Image
					className='object-cover object-center mx-auto'
					src={urlFor(post.mainImage).url()}
					alt=''
					fill
					
					/>

				</div>
				<section className='p-5 bg-[#071952] w-full'>
					<div className='flex flex-col  md:flex-row justify-between gap-y-5'>
						<div className='flex flex-col gap-y-3'>
							<h1 className='text-4xl font-extrabold'>
								{post.title}

							</h1>
							    <p>
									{new Date(post._createdAt).toLocaleDateString(
										"en-US",{
											day:'numeric',
											month:'long',
											year:'numeric'
										}
									)}
								</p>
						</div>
						<div className='flex items-center  space-x-2'>
							<Image
							className='rounded-full'
							src={urlFor(post.author.image).url()}
							alt=''
						    width={60}
							height={60}


							
							/>
							<div className='w-48'>
								<h3 className='text-lg font-bold'>{post.author.name}</h3>
								<p className='font-thin text-slate-400'>A passionate web dev </p>
							</div>
						</div>
					</div>
					<div>
						<h2 className='italic pt-10'>{post.description}</h2>
						<div className='flex items-center justify-end mx-auto space-x-2'>
							{post.categories.map((category)=>{
								return(
									<p key={category._id} className='bg-[#134B70] text-center text-white px-3 py-1 rounded-full text-sm font-semibold'>
										{category.title}

									</p>
								)
							})}
						</div>
					</div>
				</section>
			</div>
		</section>
		<PortableText value={post.body} components={RichTextComponents}/>
	</article>
  )
}

export default PostPage