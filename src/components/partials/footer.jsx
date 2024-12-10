import { RxInstagramLogo } from "react-icons/rx";
import { IoShareSocial } from "react-icons/io5";
import { motion } from "motion/react"

export default function Header({}) {
  return (
    <>  
      <div className="z-50 relative md:fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-top  dark:shadow-2xl">
        <div className="px-6 pt-3 pb-7 relative">
          <div className="flex justify-between item-center">          
            <motion.div 
              className="flex gap-3 items-center"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0, transition: { duration: .6 } }}>

              <a href="mailo:gouveli.art@gmail.com">
                <IoShareSocial size="24px" />
              </a>

              <p className="font-serif text-sm md:text-base  text-right"> 
                Greece 2024,  <a href="https://www.mariagouveli.com" className="hover:text-red-700 duration-200 transition-color" target="_blank">
                  Maria Gouveli 
                </a>  
                <span className="mx-1.5">|</span>
                <a href="https://www.turning-thetide.com" className="hover:text-red-700 duration-200 transition-color" target="_blank">
                  Turning the tide
                </a>
              </p>
            </motion.div>
            <div>
            </div>
          </div>    
        </div>
      </div>
    </>
  );
}