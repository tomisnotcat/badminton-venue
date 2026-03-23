import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">😕</div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-500 mb-8">抱歉，页面未找到</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-green-600 transition"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
