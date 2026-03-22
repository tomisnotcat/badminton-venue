'use client'

import { useState } from 'react'
import { User, Calendar, MapPin, CreditCard, Settings, LogOut, Clock } from 'lucide-react'

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('bookings')

  const bookings = [
    { id: 1, venue: '奥体中心羽毛球馆', date: '2024-03-16', time: '14:00-16:00', status: 'upcoming', price: 60 },
    { id: 2, venue: '羽之翼羽毛球中心', date: '2024-03-10', time: '10:00-12:00', status: 'completed', price: 70 },
  ]

  const myEvents = [
    { id: 1, title: '周末友谊赛', date: '2024-03-16', role: '参与者' },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl text-white font-bold">
            羽
          </div>
          <div>
            <h1 className="text-2xl font-bold">羽毛球爱好者</h1>
            <p className="text-gray-500">等级 3.5 · 朝阳区</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'bookings' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            我的预订
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'events' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            我的活动
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === 'settings' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            设置
          </button>
        </div>

        {/* Content */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-2xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{booking.venue}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    booking.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {booking.status === 'upcoming' ? '即将开始' : '已完成'}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {booking.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {booking.time}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="font-bold text-primary">¥{booking.price}</span>
                  {booking.status === 'upcoming' && (
                    <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                      取消预订
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-4">
            {myEvents.map(event => (
              <div key={event.id} className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{event.date}</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {event.role}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6">
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                <User className="w-5 h-5 text-gray-600" />
                <span>个人信息</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <span>支付方式</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                <Settings className="w-5 h-5 text-gray-600" />
                <span>设置</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 text-red-500">
                <LogOut className="w-5 h-5" />
                <span>退出登录</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
