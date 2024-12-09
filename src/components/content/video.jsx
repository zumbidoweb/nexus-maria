"use client"

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 



export default function VideoPlayer({ title = '', width = "1920", height = "1080", src, className = "", ...props }) {
  return (
    <section className={`w-full ${className} `}> 
      <div>       
        {title && <h2>{title}</h2>}
      </div>
      <div data-scroll data-scroll-speed="1/2">  
        <CldVideoPlayer autoplay loop muted
          bigPlayButton={false}
          width={width}
          height={height}
          controls={true}
          src={src}
        />    
      </div>
    </section>
  )
}