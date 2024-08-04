/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
		domains: ['cdn.sanity.io'],

		remotePatterns:[
			
				{
					protocol: "https",
				  	hostname: "images.pexels.com",
				}	
				
		]
	}
};

export default nextConfig;
