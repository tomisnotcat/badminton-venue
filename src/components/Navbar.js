'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: '首页', path: '/' },
  { name: '球馆', path: '/venues' },
  { name: '球友', path: '/players' },
  { name: '约球', path: '/match' },
  { name: '教练', path: '/coaches' },
  { name: '消息', path: '/messages' },
  { name: '我的', path: '/my' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏸</span>
            <span className="text-xl font-bold text-primary">羽球圈</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-green-50 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-green-600 transition flex items-center gap-1"
            >
              <User className="w-4 h-4" />
              登录
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                    pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-primary text-white rounded-xl text-sm font-medium text-center"
              >
                登录
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
