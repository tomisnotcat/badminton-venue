'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Activity, User, MapPin, Calendar, Users, Award } from 'lucide-react'

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
            <Link href="/" className="text-gray-600 hover:text-primary font-medium">首页</Link>
            <Link href="/venues" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <MapPin className="w-4 h-4" /> 球馆
            </Link>
            <Link href="/players" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <Users className="w-4 h-4" /> 球友
            </Link>
            <Link href="/match" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 约球
            </Link>
            <Link href="/coaches" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <Award className="w-4 h-4" /> 教练
            </Link>
            <Link href="/login" className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary font-medium">
              登录
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
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-600 px-2 font-medium" onClick={() => setMenuOpen(false)}>首页</Link>
              <Link href="/venues" className="text-gray-600 px-2 font-medium" onClick={() => setMenuOpen(false)}>🏀 球馆</Link>
              <Link href="/players" className="text-gray-600 px-2 font-medium" onClick={() => setMenuOpen(false)}>👥 球友</Link>
              <Link href="/match" className="text-gray-600 px-2 font-medium" onClick={() => setMenuOpen(false)}>📅 约球</Link>
              <Link href="/coaches" className="text-gray-600 px-2 font-medium" onClick={() => setMenuOpen(false)}>🏅 教练</Link>
              <Link href="/login" className="text-primary px-2 font-medium" onClick={() => setMenuOpen(false)}>登录</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
