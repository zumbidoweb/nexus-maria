import CustomLink from "@/components/ui/custom-link";
import dynamic from "next/dynamic";
import Head from "next/head"
import Image, { ImageProps } from 'next/image'
import { motion } from "motion/react"

export const components = {
  a: CustomLink,
  p: ({ children }) => (<p >{children}</p>),
  h3: ({ children }) => (<motion.h3 className="max-w-3xl" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>{children}</motion.h3>),
  blockquote: ({ children }) => (<motion.blockquote initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}>{children}</motion.blockquote>),
  h2: ({ children }) => (<motion.h2 className="max-w-3xl" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>{children}</motion.h2>),
  h1: ({ children }) => (<motion.h1 className="max-w-3xl" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>{children}</motion.h1>),
  img: (props) => (
    <Image
      data-scroll data-scroll-speed="2"
      sizes="100vw"
      width={1600}
      height={900}
      layout="responsive"
      loading="lazy"
      className="max-w-4xl"
      style={{ width: '100%', height: 'auto', paddingBottom: '12px', marginTop: '-15px' }}
      {...(props)}      
      src={`/locations/${props.src}`}
    />
  ),
  VideoPlayer: dynamic(() => import("./video")),
  Gallery: dynamic(() => import("./gallery")),
  AudioPlayer: dynamic(() => import("./audio")),
  Interview: dynamic(() => import("./interview")),
  Head,
};




