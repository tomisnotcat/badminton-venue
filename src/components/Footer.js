import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏸</span>
              <span className="text-xl font-bold">羽球圈</span>
            </div>
            <p className="text-gray-400 text-sm">
              一起打球，更有趣。找球馆、约球友、找教练，就上羽球圈。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/venues" className="hover:text-white transition">球馆</Link></li>
              <li><Link href="/players" className="hover:text-white transition">球友</Link></li>
              <li><Link href="/match" className="hover:text-white transition">约球</Link></li>
              <li><Link href="/coaches" className="hover:text-white transition">教练</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">服务</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/login" className="hover:text-white transition">注册/登录</Link></li>
              <li><Link href="/my" className="hover:text-white transition">个人中心</Link></li>
              <li><Link href="/messages" className="hover:text-white transition">消息</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>客服电话: 400-123-4567</li>
              <li>邮箱: support@yuanqiu.com</li>
              <li>工作时间: 9:00-21:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2026 羽球圈. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
