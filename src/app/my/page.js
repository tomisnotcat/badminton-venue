'use client'

import { useState } from 'react'
import { User, MapPin, Calendar, Award, Settings, Users, MessageCircle, LogOut, Edit2 } from 'lucide-react'

// 模拟当前用户数据
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

// 模拟订单/预约记录
const bookings = [
  { id: 1, type: 'venue', name: '奥体中心羽毛球馆', date: '2026-03-25', time: '14:00-16:00', status: '已预约', price: 60 },
  { id: 2, type: 'coach', name: '刘教练', date: '2026-03-26', time: '10:00-12:00', status: '已预约', price: 200 },
  { id: 3, type: 'event', name: '周末双打友谊赛', date: '2026-03-28', time: '14:00-18:00', status: '已报名', price: 30 },
]

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">个人中心</h1>

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
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {currentUser.province} {currentUser.city}
                </span>
                <span>水平: {currentUser.skill}</span>
              </div>
            </div>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{currentUser.matches}</div>
            <div className="text-gray-500 text-sm">参赛次数</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{currentUser.wins}</div>
            <div className="text-gray-500 text-sm">获胜次数</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{currentUser.winRate}%</div>
            <div className="text-gray-500 text-sm">胜率</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-gray-500 text-sm">约球次数</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: 'profile', name: '个人资料', icon: User },
            { id: 'bookings', name: '我的预约', icon: Calendar },
            { id: 'messages', name: '消息', icon: MessageCircle },
            { id: 'settings', name: '设置', icon: Settings },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">基本信息</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">昵称</div>
                  <div className="font-medium">{currentUser.name}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">邮箱</div>
                  <div className="font-medium">{currentUser.email}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">手机号</div>
                  <div className="font-medium">{currentUser.phone}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">注册时间</div>
                  <div className="font-medium">{currentUser.joinDate}</div>
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-4 mt-6">打球信息</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">当前等级</div>
                  <div className="font-bold text-primary text-lg">{currentUser.level}</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">技术水平</div>
                  <div className="font-bold text-primary text-lg">{currentUser.skill}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">我的预约</h3>
              {bookings.map(booking => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium">{booking.name}</div>
                    <div className="text-sm text-gray-500">{booking.date} {booking.time}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      booking.status === '已预约' || booking.status === '已报名' 
                        ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {booking.status}
                    </div>
                    <div className="font-bold">¥{booking.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="text-center py-8 text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>暂无新消息</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <span>账号设置</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <span>通知设置</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <span>隐私设置</span>
                <span className="text-gray-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition">
                <span className="flex items-center gap-2">
                  <LogOut className="w-5 h-5" />
                  退出登录
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
