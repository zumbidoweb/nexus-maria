import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { motion } from "motion/react"

export default function Interview({ children, title = '', intro = '', className = '', ...props }) {
  return (
    <div>
      <motion.section className={`${className}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0, transition: { ease: 'easeOut', duration: .5 } }}> 
        <Collapsible className="bg-gray-50/85 px-6 py-2 rounded">
          <CollapsibleTrigger className="text-left">
            {title} 
            <p className="mb-0">"{intro}"</p>
            <p className="font-semibold text-sm mt-2 text-right">Read full interview +</p>
         
          </CollapsibleTrigger>
          <CollapsibleContent>
            {children}
          </CollapsibleContent>
        </Collapsible>
      </motion.section>
    </div>
  )
}