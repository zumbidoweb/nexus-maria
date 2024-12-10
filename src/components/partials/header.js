import { RxInstagramLogo } from "react-icons/rx";
import { VscMenu, VscClose } from "react-icons/vsc";
import { motion } from "motion/react"
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";
import { HiHomeModern } from "react-icons/hi2";
import { TbHexagonLetterNFilled } from "react-icons/tb";
export default function Header({ links }) {
  return (
    <>  
      <div className="z-50 fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-xl shadow-white dark:shadow-xl">
        <div className="p-6 flex justify-between">          
          <motion.div 
            className="font-serif uppercase font-bold text-3xl" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0, transition: { duration: .6 } }}>
            <Link href="/"><TbHexagonLetterNFilled /></Link>
          </motion.div>
          <motion.div 
            className="pr-1 lg:pr-4 flex items-center gap-6"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0, transition: { duration: .6 } }}>
            <ModeToggle />           
            <Drawer>
              <DrawerTrigger><VscMenu className="cursor-pointer" size="24px" /></DrawerTrigger>
              <DrawerContent>              
                <div className="h-[98vh] px-0 md:px-8  container">
                  <div className="w-full flex justify-end px-3">
                    <DrawerClose>                    
                      <VscClose className="text-gray-400" size="36px" />
                    </DrawerClose>
                  </div>
                  <DrawerTitle>
                    <h1 className="text-4xl text-center font-['Roboto_Condensed'] font-serif font-semibold mt-2 opacity-0 md:opacity-100 hidden">Nexus</h1>
                  </DrawerTitle>
                  <DrawerDescription className=" h-full overflow-auto w-full lg:flex items-center justify-center">

                    <ul className="grid grid-cols-2   sm:grid-cols-3  md:grid-cols-4  xl:grid-cols-5 gap-2 lg:gap-4 pt-8  lg:pt-o pb-16 max-h-full  px-5">                     
                      {links && links.map((link, index) => ( 
                        <li className="aspect-video overflow-hidden bg-gray-800 duration-400 transition-all" key={index} >                                              
                          <Link className="group aspect-video " href={`/locations/${link.slug}`}>
                            <Image className="object-cover aspect-video w-full  duration-400 transition-all opacity-60 lg:opacity-100 group-hover:opacity-20 z-10 relative" alt={link.slug} height={400} width={1000} src={`/locations/${link.slug}/cover.jpg`} />
                            <p className="duration-400 transition-all tracking-tight font-sans text-base md:text-lg xl:text-xl -mt-10 lg:mt-2 group-hover:-mt-10 ml-4 text-white z-20 relative lg:opacity-0 group-hover:opacity-100">
                              {link.data.title?.slice(0, 18)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </DrawerDescription>
                </div>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>    
      </div >
    </>
  );
}