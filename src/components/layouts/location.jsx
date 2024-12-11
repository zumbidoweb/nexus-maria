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
import Head from 'next/head'
import VideoPlayer from '@/components/content/video'

export default function LocationLayout({ children, posts, data, slug }) {

  const router = useRouter();
  const containerRef = useRef(null)

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} key={slug} />
        <meta property="og:image" content={`https://next.mariagouveli.com/${slug}/cover.jpg`} />
      </Head>

      <motion.div className="relative" >
        <Header links={posts} key={data.color} />
        <div className="lg:flex">     
          <div className="lg:w-1/3 relative  -top-3 lg:-top-10 left-0 z-10">
            <div className="pl-2 lg:pl-6 max-w-2xl lg:pr-0  pt-24 lg:pt-32 w-full relative top-0 left-0 ">   
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .8 } }}>       
                <Map links={posts} /> 
                <div className="-mt-7 text-xs text-gray-500 text-center hidden  lg:block">click at the dots to navigate</div> 
              </motion.div>  
            </div>  
          </div> 
          <div className="lg:w-2/3 relative  pl-6 pr-6  xl:pl-12 lg:pr-16  bg-white dark:bg-gray-950 z-20" key={data.color}>
            <LocomotiveScrollProvider
              options={{ smooth: true, tablet: { breakpoint: 0 }, tablet: { smooth: false } }} 
              containerRef={containerRef} 
              watch={[router.asPath]}>
              <section className="py-0 pb-12  sm:py-12 md:py-20 lg:py-36  xl:py-32 2xl:py-40 " data-scroll-container ref={containerRef}>  
                <div className="bg-white  dark:bg-gray-950 lg:pt-4 ">   
                  <motion.h1 
                    className="text-5xl md:text-7xl font-semibold mb-2 lg:mb-4 mb-3 mt-0 lg:mt-2 font-serif" 
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
                    className="prose  dark:prose-invert max-w-4xl mt-10  lg:mt-16 space-y-4 md:space-y-6">
                    {children}
                  </motion.div>              
                  {slug == 'about' &&
                    <section className="mt-10 xl:mt-16 lg:mt-16 max-w-4xl"> 
                      <h2 className=" font-semibold text-4xl font-serif mb-16">Project and locations</h2>
                      <ul className="grid grid-cols-2   md:grid-cols-3 pb-32 gap-x-6 gap-y-10 lg:gap-y-4">
                        {posts && posts.map((post, index) => ( 
                          <li key={index} className="-mt-4" data-scroll data-scroll-speed={.8 + (index / 5)}>                                          
                            <Link className="group relative" href={`/locations/${post.slug}`}>
                              <div className=" flex relative z-20">
                                <div className="hidden -mb-6 mt-6  ml-1 lg:inline-block opacity-80">
                                  {post.data.categories && post.data.categories.map((category, index) => (
                                    <Badge className="!text-xs dark:opacity-80" key={index} style={{ backgroundColor: category.toRGB() }}>{category}</Badge>
                                  ))}   
                                </div>        
                              </div>
                              <Image className="object-cover aspect-video w-full group-hover:opacity-100 opacity-80  duration-200 transition-all" alt={post.slug} height={400} width={1000} src={`/locations/${post.slug}/cover.jpg`} />
                              <p className="font-sans text-lg font-bold mt-1 ">
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
    </>
  )
}



 