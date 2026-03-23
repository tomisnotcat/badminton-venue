import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: '羽球圈 - 找球馆、约球友、找教练',
  description: '一起打球，更有趣。找球馆、约球友、找教练，就上羽球圈。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
