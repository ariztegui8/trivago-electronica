"use client";
import Drawer from './Drawer'
import { DefaultProvider } from './context/DefaultProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trivago Electronica',
  description: 'Web site Trivago Electronica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DefaultProvider>
        <body className={inter.className}>
          <Drawer />
          {children}
        </body>
      </DefaultProvider>
    </html>
  )
}
