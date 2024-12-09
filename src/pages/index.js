import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "@/utils/api-server";
import { MDXRemote } from "next-mdx-remote";
import { components } from "@/components/content/prose"
import { serialize } from "next-mdx-remote/serialize";
import Map from '@/components/partials/map'
import { motion } from "motion/react"
import Base from "@/components/partials/map-base";
import MapAnimated from "@/components/partials/map-animated";
import Footer from '@/components/partials/footer'
import { Button } from '@/components/ui/button'
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { TbHexagonLetterNFilled } from "react-icons/tb";

export default function Index({ posts }) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">

      <div className="absolute  h-screen w-screen  z-10 opacity-50 md:opacity-100">  
        <MapAnimated links={posts} />   
      </div>  

      <div className="relative  h-screen w-screen  flex items-center justify-center z-20 xl:px-16">
        <div className="max-w-2xl mx-auto text-center md:bg-white 0 shadow-white dark:shadow-none p-10  text-gray-900 rounded ">
          <motion.h1 
            className="text-7xl font-semibold mb-2 md:mb-4 font-serif" 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}>   
            Nexus
          </motion.h1>  
          <motion.p className="font-medium font-serif text-lg " initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5, delay: 1.7 } }}>
            Art, research, social engagement and documentation in one interwoven structure.        
          </motion.p>
          <motion.div  
            initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5, delay: 3 } }} 
            className="prose-sm  dark:prose-invert max-w-none mt-4 md:mt-6">                 
            <p className="font-medium">This is an art project without clear dividing lines between artwork, research, social engagement and documentation. Like a plexus, it is an interwoven combination of elements in one structure.All elements are correlated and mingled in a dynamic mapping process. </p>
          </motion.div> 
          <motion.div  
            initial={{ opacity: 0, y: 10, }} animate={{ y: 0, opacity: 1, transition: { duration: .5, delay: 6.5 } }} 
            className="mt-4 md:mt-8 mb-24 md:mb-0">   
            <Link className="text font-serif uppercase font-semibold  tracking-wide  bg-black rounded-sm px-6 py-2 cursor-pointer hover:bg-red-700 inline-block text-white" href="/locations/about">  
              <div className="flex gap-3 items-center">       
                View project
              </div>   
            </Link>
          </motion.div> 
        </div>
      </div>

   
      <Footer />
    </div >     

  );
}

export const getStaticProps = () => {
  const posts = postFilePaths.map((filePath) => {
    const { content, data } = matter(fs.readFileSync(path.join(POSTS_PATH, filePath)));
    return {
      content,
      data,
      slug: filePath.replace(/\.[^/.]+$/, ""),
      filePath,
    };
  });
  return { 
    props: { 
      posts,

    }
  };
}
