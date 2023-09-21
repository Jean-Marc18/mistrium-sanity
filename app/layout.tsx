import './font.css'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mistrium',
  description: 'Mistrium website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-white-100'>
        {children}
      </body>
    </html>
  )
}
