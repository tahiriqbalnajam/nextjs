import './globals.css';
import { Inter } from 'next/font/google';
import './css/all.min2.css';
//import './css/bootstrap.min.css';
//import './css/owl.carousel.min.css';
//import './css/style.css';
//import './css/responsive.css';

import './css/styles.css';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
