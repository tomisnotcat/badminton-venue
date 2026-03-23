'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, MapPin, Calendar, Award, Settings, Users, MessageCircle, LogOut, Edit2, Star, Trophy, Clock, CreditCard, Bell, Shield, HelpCircle } from 'lucide-react'

const currentUser = {
  name: '羽毛球爱好者',
  email: 'user@example.com',
  phone: '138****8888',
  role: 'player',
  roleName: '球友',
  avatar: '🏸',
  province: '北京市',
  city: '市辖区',
  district: '朝阳区',
  level: '中级球友',
  skill: '3.5',
  joinDate: '2025-06-15',
  matches: 28,
  wins: 15,
  winRate: 54,
}

const bookings = [
  { id: 1, type: 'venue', name: '奥体中心羽毛球馆', date: '2026-03-25', time: '14:00-16:00', status: '已预约', price: 60 },
  { id: 2, type: 'coach', name: '刘教练', date: '2026-03-26', time: '10:00-12:00', status: '已预约', price: 200 },
  { id: 3, type: 'event', name: '周末双打友谊赛', date: '2026-03-28', time: '14:00-18:00', status: '已报名', price: 30 },
]

const stats = [
  { icon: Trophy, label: '参赛次数', value: currentUser.matches, color: 'bg-yellow-50 text-yellow-600' },
  { icon: Star, label: '获胜次数', value: currentUser.wins, color: 'bg-green-50 text-green-600' },
  { icon: Award, label: '胜率', value: currentUser.winRate + '%', color: 'bg-blue-50 text-blue-600' },
  { icon: Clock, label: '约球次数', value: 8, color: 'bg-purple-50 text-purple-600' },
]

const menuItems = [
  { icon: User, label: '个人资料', path: '/my', desc: '查看和编辑个人信息' },
  { icon: Calendar, label: '我的预约', path: '/my', desc: '场地预约、教练课程' },
  { icon: MessageCircle, label: '我的消息', path: '/messages', desc: '查看消息通知' },
  { icon: CreditCard, label: '我的订单', path: '/my', desc: '查看订单记录' },
  { icon: Bell, label: '通知设置', path: '/my', desc: '推送消息管理' },
  { icon: Shield, label: '隐私设置', path: '/my', desc: '账号安全管理' },
  { icon: HelpCircle, label: '帮助中心', path: '/my', desc: '常见问题解答' },
]

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen py-8 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">个人中心</h1>

        {/* User Card */}
        <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{currentUser.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{currentUser.roleName}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 opacity-90">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{currentUser.province} {currentUser.city}</span>
                <span>水平: {currentUser.skill}</span>
              </div>
            </div>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} rounded-xl p-4 text-center`}>
              <stat.icon className="w-6 h-6 mx-auto mb-1" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.path} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition border-b last:border-b-0">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
              <span className="text-gray-400">→</span>
            </Link>
          ))}
        </div>

        {/* Bookings */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="font-bold text-lg mb-4">最近预约</h3>
            <div className="space-y-3">
              {bookings.map(booking => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium">{booking.name}</div>
                    <div className="text-sm text-gray-500">{booking.date} {booking.time}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      booking.status === '已预约' || booking.status === '已报名' ? 'text-green-600' : 'text-gray-500'
                    }`}>{booking.status}</div>
                    <div className="font-bold">¥{booking.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition">
          <LogOut className="w-5 h-5" />退出登录
        </button>
      </div>
    </div>
  )
}
