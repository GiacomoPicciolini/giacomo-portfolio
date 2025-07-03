import { Inter, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const robotoFont = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const monumentExtendedFont = localFont({
  variable: '--font-monument',
  src: [
    {
      path: './monument-extended/MonumentExtended-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './monument-extended/MonumentExtended-Ultrabold.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})
