import './globals.css'
import { Barlow } from 'next/font/google'
import Header from '../components/Header';

const barlow = Barlow({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

export const metadata = {
  title: 'Giacomo Picciolini Portfolio',
  description: 'Giacomo Picciolini Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  )
}
