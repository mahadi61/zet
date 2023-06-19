import BigAnimation from '@/app/BigAnimation';
import "aos/dist/aos.css";
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './shared/footer/Footer';
import Navbar from './shared/navbar/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET',
  description: 'ZET',
}

export default function RootLayout({ children }) {

 



  return (
    <html lang="en">
    
      
      <body className={inter.className}>
        <nav className='border-b-2 '>
        <div className="max-w-6xl mx-auto ">
        <Navbar></Navbar>
        </div>
        </nav>
        <BigAnimation></BigAnimation>
        {children}
        
       <Footer></Footer>
      </body>

    </html>
  )
}
