'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Users, Calendar, MessageCircle, User, LogIn } from 'lucide-react'

const navItems = [
  { href: '/', label: '首页', icon: Home },
  { href: '/venues', label: '球馆', icon: Users },
  { href: '/players', label: '球友', icon: Users },
  { href: '/coaches', label: '教练', icon: Users },
  { href: '/match', label: '约球', icon: Calendar },
]

const authItems = [
  { href: '/messages', label: '消息', icon: MessageCircle },
  { href: '/my', label: '我的', icon: User },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏸</span>
            <span className="text-xl font-bold text-primary">羽球圈</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  pathname === item.href ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-2">
            {authItems.map(item => (
              <Link key={item.href} href={item.href}
                className={`p-2 rounded-xl transition ${
                  pathname === item.href ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}>
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
            <Link href="/login" className="ml-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-green-600 transition">
              登录
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-1">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl ${
                    pathname === item.href ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}>
                  {item.label}
                </Link>
              ))}
              <hr className="my-2" />
              {authItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl ${
                    pathname === item.href ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/login" onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 mt-2 bg-primary text-white text-center rounded-xl">
                登录
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
