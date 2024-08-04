import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
	<div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-4 mb-12'>
		<div className='flex text-center flex-col  md:flex-row sm:ml-32 gap-4 sm:gap-20 justify-center items-center'>
			<Image className='object-cover' alt='zakaria' src={'/hadraoui.png'}  width={200} height={200}/>
			<h1 className='text-4xl sm:text-5xl w-full tracking-wider leading-10 dark:text-[#fff] text-[#0f0f15] font-semibold '>Hello and Welcome <br /> 👋 I'm Zakaria.</h1>

		</div>

	</div>
  )
}

export default Banner