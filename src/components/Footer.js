import { Activity } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            <span className="font-bold">羽球圈</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 羽球圈. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">关于我们</a>
            <a href="#" className="text-gray-400 hover:text-white">联系方式</a>
            <a href="#" className="text-gray-400 hover:text-white">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
