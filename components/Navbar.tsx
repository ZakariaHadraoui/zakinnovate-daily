"use client"

import ThemeSwitch from '@/components/ui/ThemeSwitch'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { client } from '../lib/saniti.client'
import { groq } from 'next-sanity'

function Navbar() {
	useEffect(() => {
		const getposts=async()=>{
			const query = groq`*[_type == "post"]{
				... ,
				author->,
				categories[]->,
				body
				}`;
				const posts = await client.fetch(query);
				console.log(posts);
		}
		getposts()
	  
	
	 
	}, [])
	
  return (
	<div className='px-4 md:px-8 lg:px-10 xl:px-10 2xl:px-32  flex h-20 justify-between items-center'>
		<Link href={'/'}><h1 className='text-4xl font-bold text-[#3ABEF9] dark:text-[#37B7C3] sm:ml-32'>Zakinnovate.Daily</h1></Link>
		<div className='flex gap-8 justify-center items-center'>
			<h2 className='text-3xl text-white bg-[#3572EF] rounded-xl py-1 px-4 hidden sm:flex'>Discover web dev</h2>
			<ThemeSwitch/>

		</div>

	</div>
	



  )
}

export default Navbar