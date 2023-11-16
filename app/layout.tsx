import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {Providers} from "@/store/provider";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          {children}
          <ToastContainer position={'bottom-right'}/>
      </Providers>
      </body>
    </html>
  )
}
