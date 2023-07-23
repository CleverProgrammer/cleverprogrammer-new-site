import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import '../styles/globals.css'

let title = 'Clever Programmer'
let description = 'Land your dream job as a developer in months.'
let ogimage = 'https://i.imgur.com/QPEDI4a.png'
let sitename = 'cleverprogrammer.com'

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: 'https://cp-nine.vercel.app/',
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-[#17181C] text-white'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
