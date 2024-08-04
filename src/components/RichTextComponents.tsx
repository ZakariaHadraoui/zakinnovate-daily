import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/image";

export const RichTextComponents={
	types: {
		image: ({ value }) => {
		  return (
			<div className="relative w-full h-96 m-10 mx-auto">
				<Image
				 className="object-contain"
                 fill
                  src={urlFor(value).url()}
                  alt={value.alt}
                />
			</div>
		  );
		},
	  },
	  list: {
		bullet: ({ children } : any) => {
			return(
				<ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
			)
		},
		number: ({ children } : any) => {
			return(
				<ol className="mt-10 list-decimal">{children}</ol>
			)
		},
	  },
	
	  block: {
		// Ex. 1: customizing common block types
		h1: ({ children }:any) => <h1 className="text-3xl sm:text-4xl py-10 font-bold text-[#1A1A1A] dark:text-white">{children}</h1>,
		h2: ({ children }:any) => <h1 className="text-4xl py-10 font-bold text-[#1A1A1A] dark:text-white">{children}</h1>,
		h3: ({ children }:any) => <h1 className="text-3xl py-10 font-bold text-[#1A1A1A] dark:text-white">{children}</h1>,
		h4: ({ children }:any) => <h1 className="text-2xl  font-semibold dark:text-slate-500 text-[#49c7cc]">{children}</h1>,
		blockquote: ({ children }:any) => (
			<blockquote className="border-l-purple-500 border-l-4 pl-5 py-5 my-5">
				{children}
			</blockquote>
		  ),
		
	
		
	  },
	  marks: {
		link:({children,value}:any)=>{
			const rel = !value.href.startsWith("/")
			? 'noreferrer noopener'
			: undefined

			return(
				<Link href={value.href} rel={rel} className="underline decoration-[#3ABEF9] hover:decoration-black">
					{children}

				
				</Link>
			
			)
		}
		
		
	
		
	  },
	  
	
	
}
