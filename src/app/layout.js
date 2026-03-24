import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '羽球圈 - 羽毛球场地球友预约平台',
  description: '找球馆、约球友、找教练，一起打球更有趣',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
