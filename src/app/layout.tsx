import type { Metadata } from 'next'
import '@/core/styles/main.scss'
import { interFont, monumentExtendedFont, robotoFont } from '@/core'

export const metadata: Metadata = {
  title: 'Giacomo Picciolini Portfolio',
  description: 'Giacomo Picciolini Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${robotoFont.variable} ${monumentExtendedFont.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
