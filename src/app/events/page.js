'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'
import { events } from '@/data/venues'

export default function EventsPage() {
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = events.filter(e => {
    return statusFilter === 'all' || 
      (statusFilter === 'open' && e.status === 'open') ||
      (statusFilter === 'full' && e.status === 'full')
  })

  const joinEvent = (event) => {
    if (event.status === 'full') return
    alert('报名成功！')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">活动</h1>

        {/* Filter */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-2 rounded-full ${statusFilter === 'all' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            全部
          </button>
          <button
            onClick={() => setStatusFilter('open')}
            className={`px-4 py-2 rounded-full ${statusFilter === 'open' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            可报名
          </button>
          <button
            onClick={() => setStatusFilter('full')}
            className={`px-4 py-2 rounded-full ${statusFilter === 'full' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            已满员
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filtered.map(event => (
            <div key={event.id} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    event.level === '不限' ? 'bg-gray-100 text-gray-600' :
                    event.level === '初学者' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {event.level}
                  </span>
                  {event.status === 'full' && (
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">已满员</span>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {event.venue}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {event.players}/{event.maxPlayers}人
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-gray-500 text-sm">费用</p>
                  <p className="text-2xl font-bold text-primary">¥{event.fee}</p>
                </div>
                <button
                  onClick={() => joinEvent(event)}
                  disabled={event.status === 'full'}
                  className={`px-6 py-3 rounded-xl font-medium ${
                    event.status === 'full' 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-secondary'
                  }`}
                >
                  {event.status === 'full' ? '已满员' : '报名'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            暂无活动
          </div>
        )}
      </div>
    </div>
  )
}
