import { Manrope, Roboto_Condensed } from 'next/font/google'
import { ThemeProvider } from "@/components/ui/theme-provider"
import "@/utils/string-to-rgb.js"
import "@/styles/scrollbar.css" 
import "@/styles/globals.css";

import "@/styles/memory.css";
const serif = Roboto_Condensed({ weight: 'variable', subsets: ['greek', 'latin'], variable: "--font-serif" })
const sans = Manrope({ weight: 'variable', subsets: ['greek', 'latin'], variable: "--font-sans" })

export default function App({ Component, pageProps }) {
  return (  
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >   
      <main className={`${serif.variable} ${sans.variable} font-sans`}>    
        <Component {...pageProps} />  
      </main>
    </ThemeProvider>
  );
}
