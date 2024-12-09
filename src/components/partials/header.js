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
            className="pr-4 flex items-center gap-6"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0, transition: { duration: .6 } }}>
            <ModeToggle />           
            <Drawer>
              <DrawerTrigger><VscMenu className="cursor-pointer" size="24px" /></DrawerTrigger>
              <DrawerContent>
              
                <div className="h-[98vh] py-12 container">
                  <div className="w-full flex justify-end">
                    <DrawerClose>                    
                      <VscClose className="text-gray-400" size="32px" />
                    </DrawerClose>
                  </div>
                  <DrawerTitle>
                    <h1 className="text-6xl text-center font-['Roboto_Condensed'] font-serif font-semibold mt-2 opacity-0 md:opacity-100">Nexus</h1>
                  </DrawerTitle>
                  <DrawerDescription className="flex h-full items-center justify-center w-full">
                    <ul className="grid grid-cols-2   sm:grid-cols-3  lg:grid-cols-4 gap-4 mb-32 overflow-auto max-h-full">
                     
                      {links && links.map((link, index) => ( 
                        <li className="aspect-video overflow-hidden" key={index} >    
                                          
                          <Link className="hover:opacity-100 opacity-60 duration-100 transition-all" href={`/locations/${link.slug}`}>
                            <Image className="object-cover aspect-video w-full" alt={link.slug} height={400} width={1000} src={`/locations/${link.slug}/cover.jpg`} />
                            <p class="font-medium font-sans text-lg xl:text-xl -mt-10 ml-4 text-white">
                              {link.data.title}
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