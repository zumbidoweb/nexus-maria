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
              {link.data.location && <g>            
                <motion.circle ref={circleRef} cx="10" cy="10" r="23"
                  initial={{ opacity: 0, r: 30 }} animate={{ opacity: 1, r: 23, transition: { default: { delay: 0.5 + (index / 4), duration: 0.5, ease: "easeOut" } } }}
                  className="cursor-pointer hover:opacity-50 opacity-100 transition-all duration-100"
                  onClick={() => router.push(`/locations/${link.slug}`)}
                  fill={link.data.color}  
                  key={index}
                  data-name={link.data.title}            
                  transform={`translate(${link.data.location})`}
                />               
                <Tooltip triggerRef={circleRef} >               
                  <rect x={-120} rx="5" ry="5" y={-77} width={240} height={52} fill='white' border='#f7f7f7' />
                  <text x={0} y={-50} alignmentBaseline="middle" textAnchor="middle" fontSize={27} fontWeight={700} fill='black'>{link.data.title?.slice(0, 18)}</text>           
                  <polygon points="0,-10 -20,-30 20,-30" fill="white" />             
                </Tooltip>
              </g>
              }         
            </g>  
          ))}
        </g>
      </svg>
    </div>
  )
};

export default Map;
