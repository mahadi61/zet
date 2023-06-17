import BigAnimation from '@/app/BigAnimation';
import Footer from '@/footer/Footer';
import Navbar from '@/navbar/Navbar';
import "aos/dist/aos.css";
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET',
  description: 'ZET',
  icons: {
    icon: '/favicon.png',
  },
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
