import {client} from './client'
import  ImageUrlBuilder  from '@sanity/image-url'

const builder =ImageUrlBuilder(client)

export const urlFor=(source:any)=>{

  return builder.image(source)

}
 export default urlFor