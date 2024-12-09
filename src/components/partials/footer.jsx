import { RxInstagramLogo } from "react-icons/rx";
import { IoShareSocial } from "react-icons/io5";
import { motion } from "motion/react"

export default function Header({}) {
  return (
    <>  
      <div className="z-50 fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-top dark:shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between">          
            <motion.div 
              className="flex gap-3 items-center"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0, transition: { duration: .6 } }}>
              <RxInstagramLogo size="24px" />
              <IoShareSocial size="24px" />
              <p className="font-serif mt-0.5"> <a href="https://www.mariagouveli.com" className="hover:text-red-700 duration-200 transition-color" target="_blank">Maria Gouveli</a>, Greece 2024</p>
            </motion.div>
            <div>
            </div>
          </div>    
        </div>
      </div>
    </>
  );
}