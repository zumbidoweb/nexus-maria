import Header from '../partials/header'
import Footer from '../partials/footer'
import Map from '../partials/map'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import { useRef, useEffect } from "react"
import { useRouter } from 'next/router'
import { motion } from "motion/react"
import { Badge } from '../ui/badge'
import Link from "next/link";
import Image, { ImageProps } from 'next/image'
export default function LocationLayout({ children, posts, data, slug }) {

  const router = useRouter();
  const containerRef = useRef(null)

  return (

    <motion.div className="relative" >

      <Header links={posts} key={data.color} />

      <div className="lg:flex">
     
        <div className="lg:w-1/3 relative  fixed -top-10 left-0 z-10 ">
          <div className="pl-2 lg:pl-6 max-w-2xl lg:pr-0 pr-2 pt-32 w-full relative top-0 left-0 ">   
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .8 } }}>       
              <Map links={posts} /> 
              <div className="-mt-7 text-xs text-gray-500 text-center">click at the dots to navigate</div> 
            </motion.div>  
          </div>   
        </div> 

        <div className="lg:w-2/3 relative  pl-6 xl:pl-12 pr-16 bg-white dark:bg-gray-950 z-20" key={data.color}>

          <LocomotiveScrollProvider options={{ smooth: true, tablet: { breakpoint: 0 }, tablet: { smooth: false } }} containerRef={containerRef} watch={[router.asPath]}>
            <section className="py-12 sm:py-16 md:py-20 lg:py-36  xl:py-32 2xl:py-40 " data-scroll-container ref={containerRef}>  

              <div className="bg-white  dark:bg-gray-950 pt-4 shadow-top dark:shadow-xl">       
                <motion.h1 
                  className="text-5xl md:text-7xl font-semibold mb-4 font-serif" 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: .5 } }}>   
                  {data.title}
                </motion.h1>  
                <motion.div className="flex gap-2" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: .5, delay: 0.7 } }}>
                  {data.categories && data.categories.map((category, index) => (
                    <Badge key={index} style={{ backgroundColor: category.toRGB() }}>{category}</Badge>
                  ))}           
                </motion.div>
                <motion.div  
                  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .3, delay: 0.7 } }} 
                  className="prose  dark:prose-invert max-w-5xl mt-20 space-y-8">
                  {children}
                </motion.div> 
             
                {slug == 'about' &&
                  <section className="mt-16 max-w-4xl"> 
                    <h2 className=" font-semibold text-4xl font-serif mb-12">Project and locations</h2>
                    <ul className="grid grid-cols-2   md:grid-cols-3 pb-32 gap-6">
                      {posts && posts.map((post, index) => ( 
                        <li key={index} className="-mt-4" data-scroll data-scroll-speed={.8 + (index / 5)}>                                            
                          <Link className="hover:opacity-100 opacity-80 duration-100 transition-all" href={`/locations/${post.slug}`}>
                            <Image className="object-cover aspect-video w-full" alt={post.slug} height={400} width={1000} src={`/locations/${post.slug}/cover.jpg`} />
                            <p className="font-semibold font-sans text-base mt-1  text-black">
                              {post.data.title}
                            </p>
                          </Link>
                        </li>
                      ))}

                    </ul>
                  </section>
                }   
              </div>        
            </section>   
          </LocomotiveScrollProvider>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}



 