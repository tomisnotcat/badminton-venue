'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Activity, User, Users, Calendar, Trophy, Sparkles, School, MessageCircle, Target } from 'lucide-react'

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
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-primary text-sm">首页</Link>
            <Link href="/venues" className="text-gray-600 hover:text-primary text-sm">场地</Link>
            <Link href="/players" className="text-gray-600 hover:text-primary text-sm">球友</Link>
            <Link href="/match" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> 约球
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-primary text-sm">活动</Link>
            <Link href="/courses" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
              <School className="w-4 h-4" /> 课程
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> 社区
            </Link>
            <Link href="/skill-test" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
              <Target className="w-4 h-4" /> 测试
            </Link>
            <Link href="/rankings" className="text-gray-600 hover:text-primary text-sm flex items-center gap-1">
              <Trophy className="w-4 h-4" /> 排行
            </Link>
            <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary text-sm">
              <User className="w-4 h-4" /> 登录
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
              <Link href="/match" className="text-gray-600" onClick={() => setMenuOpen(false)}>约球匹配</Link>
              <Link href="/events" className="text-gray-600" onClick={() => setMenuOpen(false)}>活动</Link>
              <Link href="/courses" className="text-gray-600" onClick={() => setMenuOpen(false)}>课程</Link>
              <Link href="/community" className="text-gray-600" onClick={() => setMenuOpen(false)}>社区</Link>
              <Link href="/skill-test" className="text-gray-600" onClick={() => setMenuOpen(false)}>等级测试</Link>
              <Link href="/rankings" className="text-gray-600" onClick={() => setMenuOpen(false)}>排行榜</Link>
              <Link href="/login" className="text-primary" onClick={() => setMenuOpen(false)}>登录</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
