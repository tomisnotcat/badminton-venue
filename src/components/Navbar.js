'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Activity, User } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gray-800">羽球圈</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary">首页</Link>
            <Link href="/venues" className="text-gray-600 hover:text-primary">场地预订</Link>
            <Link href="/players" className="text-gray-600 hover:text-primary">球友</Link>
            <Link href="/events" className="text-gray-600 hover:text-primary">活动</Link>
            <Link href="/my" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary">
              <User className="w-4 h-4" /> 我的
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-600" onClick={() => setMenuOpen(false)}>首页</Link>
              <Link href="/venues" className="text-gray-600" onClick={() => setMenuOpen(false)}>场地预订</Link>
              <Link href="/players" className="text-gray-600" onClick={() => setMenuOpen(false)}>球友</Link>
              <Link href="/events" className="text-gray-600" onClick={() => setMenuOpen(false)}>活动</Link>
              <Link href="/my" className="text-primary" onClick={() => setMenuOpen(false)}>我的</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
