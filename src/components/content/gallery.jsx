import Image from 'next/image';
import { getImages } from '@/utils/api'
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "motion/react"

export default function Gallery({ title = '', grid = 3, folder, className = 'aspect-video', ...props }) {
  const [open, setOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const images = getImages(folder)
  return (
    <section className="pb-16 max-w-4xl">
      {title && <h2 className="!mb-2">{title}</h2>}
      <div className={`grid  ${['grid-cols-1 gap-6', 'md:grid-cols-2 gap-6', 'md:grid-cols-2 xl:grid-cols-3 gap-6', 'md:grid-cols-3 xl:grid-cols-4 gap-6', 'md:grid-cols-1 xl:grid-cols-2 gap-0'][grid - 1]}`}>
        {images.map((image, index) => (  
          <motion.div className={className} key={index} initial={{ opacity: 0, y: 120 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0, transition: { ease: 'easeOut', duration: .5, delay: index % 2 !== 0 ? .2 : 0 } }}>     
            <div className={`w-full ${className} relative opacity-85 hover:opacity-100 duration-300 transition-all hover:cursor-pointer`} onClick={function () { setOpen(true); setCurrentSlide(index); }} >
              <Image
                src={image.src}
                fill
                alt={image.alt}
                sizes="(min-width: 808px) 450px, 700px"
                style={{
                  objectFit: 'cover', // cover, contain, none
                }}
              />
            </div>
          </motion.div>
        ))}
        <Lightbox
          styles={{ container: { padding: '20px', backgroundColor: '#101010' }, slide: { maxWidth: '1200px' } }}
          index={currentSlide}
          open={open}
          close={() => setOpen(false)}
          slides={images}
        />
      </div>
    </section >
  )
}