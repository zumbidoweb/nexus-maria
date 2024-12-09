"use client"
import * as React from "react";
import { useRouter } from 'next/navigation'
import { motion, useTransform, useTime } from "motion/react"
import { spring } from "motion"
import Base from "./map-base"
import { Tooltip } from 'react-svg-tooltip';

const Map = function ({ links }) {
  const router = useRouter()
  const circleRef = React.createRef();
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1000  800"   >
        <g data-name="Group 1" transform="translate(-130 -160)" id="map" alignmentBaseline="top">
          <Base />
          {links.map((link, index) => (   
            <g key={index}>  
              <motion.circle ref={circleRef} cx="10" cy="10" r="19"
                initial={{ opacity: 0, r: 30 }} animate={{ opacity: 1, r: 19, transition: { default: { delay: 0.5 + (index / 3), duration: 0.5, ease: "backOut" } } }}
                className="cursor-pointer hover:opacity-100 transition-all duration-200"
                onClick={() => router.push(`/locations/${link.slug}`)}
                fill={link.data.color}  
                key={index}
                data-name={link.data.title}            
                transform={`translate(${link.data.location})`}
              />               
              <Tooltip triggerRef={circleRef} >               
                <rect x={-110} rx="5" ry="5" y={-77} width={220} height={50} fill='white' border='#f7f7f7' />
                <text x={0} y={-50} alignment-baseline="middle" text-anchor="middle" fontSize={20} fontWeight={600} fill='black'>{link.data.title}</text>           
                <polygon points="0,-10 -20,-30 20,-30" fill="white" />             
              </Tooltip>
            </g>           
          ))}
        </g>
      </svg>
    </div>
  )
};

export default Map;
