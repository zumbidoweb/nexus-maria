import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { paths, polygons } from "@/utils/map-svg"
import * as React from "react";
import { Tooltip } from 'react-svg-tooltip';
import { useRouter } from 'next/navigation'


export default function map({ links }) {
  const router = useRouter()
  const circleRef = React.createRef();
  return (
    <svg className="h-full w-full" width="100%" id="uuid - 1c1d0827 - 41d9 - 4fe8 - a2db - f8111ac548d6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 859.77 628.71">  
     
      {
        paths.map((path, index) =>
          <motion.path 
            key={index}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 10,
              delay: (index > 100 ? ((index - (index - 10)) + index / 100) : index / 10), 
            }}
            strokeDasharray="0 1"
            fill="none"
            style={{ stroke: '#000000', strokeWidth: 0.5 }}
            d={path} />
        )
      }

      <g data-name="Group 1" transform="translate(-170 -235)" id="map">
        {links.map((link, index) => (   
          <g key={index}>  
            <motion.circle ref={circleRef} cx="10" cy="10" r="10"
              initial={{ opacity: 0, r: 20 }} 
              animate={{
                opacity: 1, r: 10, 
                transition: { default: { delay: 4 + (index / 2), duration: 0.5, ease: "backOut" } }
              }}
              className="cursor-pointer hover:opacity-100 transition-all duration-200"
              onClick={() => router.push(`/locations/${link.slug}`)}
              fill={link.data.color}  
              key={index}
              data-name={link.data.title}            
              transform={`translate(${link.data.location})`}
            />               
          
          </g>           
        ))}
      </g>

    </svg > 

  )
}