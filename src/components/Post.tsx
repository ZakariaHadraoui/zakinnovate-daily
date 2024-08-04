import urlFor from '@/sanity/lib/image'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Post({post}) {
	
  return (
<div key={post._id} className='flex flex-col group cursor-pointer'>
					<div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
						<Image className='object-cover object-left lg:object-center' 
						src={urlFor(post.mainImage).url()}
						alt=''
						fill
						
						/>
						<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
							<div>
								<p className='font-bold'>{post.title}</p>
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
							<div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
								{post.categories.map((categ)=>{
									return(
										<div key={categ._id} className='bg-[#134B70] text-center text-white px-3 py-1 rounded-full text-sm font-semibold'>
										<p>{categ.title}</p>

									    </div>
									)
								})}

							</div>

						</div>

					</div>
					<div className='mt-5 flex-1'>
						<p className='underline text-lg font-bold'>{post.title}</p>
						<p className='line-clamp-2 text-gray-500'>{post.description} </p>

					</div>
					<p className='mt-5 font-bold flex items-center group-hover:underline'>
						Read post
						<ArrowUpRightIcon className='ml-2 h-4 w-4'/>

					</p>

					</div> 
				 )
}

export default Post