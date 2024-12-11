"use client"

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { motion } from "motion/react"
import { IoMdArrowUp } from "react-icons/io";


export default function VideoPlayer({ src, title = '', width = "1920", height = "1080", loop = false, autoplay = true, muted = true, bigPlayButton = false, className = "", ...props }) {
  return (
    <section className={`w-full pt-4 ${className}`}> 
      <div className=" ">       
        {title && <h2>{title}</h2>}
      </div>
      <div>  
        <CldVideoPlayer 
          autoplay={autoplay} 
          muted={muted}         
          bigPlayButton={bigPlayButton}          
          loop={false} 
          playsinline
          width={width}
          height={height}
          controls={true}
          src={src}
          key={src}
        />  
        <motion.div className="flex gap-2 mt-3 pr-2 text-xs" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.7 } }} > 
          Audio
          <motion.div className="mt-0.5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 1 } }}><IoMdArrowUp /></motion.div>
        </motion.div> 
      </div>
    </section >
  )
}