'use client'

import { useState } from 'react'
import { MapPin, Star, Search, MessageCircle } from 'lucide-react'
import { players } from '@/data/venues'

export default function PlayersPage() {
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')

  const filtered = players.filter(p => {
    const matchSearch = p.name.includes(search) || p.intro.includes(search)
    const matchLevel = levelFilter === 'all' || p.level === levelFilter
    return matchSearch && matchLevel
  })

  const invitePlayer = (player) => {
    alert(`已向 ${player.name} 发送约球邀请！`)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">球友</h1>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索球友..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl"
            />
          </div>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-3 border rounded-xl"
          >
            <option value="all">全部等级</option>
            <option value="初学者">初学者</option>
            <option value="中级球友">中级</option>
            <option value="高级球友">高级</option>
            <option value="资深球友">资深</option>
          </select>
        </div>

        {/* Players Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(player => (
            <div key={player.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{player.avatar}</div>
                <div>
                  <h3 className="font-bold text-lg">{player.name}</h3>
                  <p className="text-primary text-sm">{player.level}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {player.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-3 text-sm">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                  等级 {player.skill}
                </span>
                <span className="text-gray-500">{player.age}岁</span>
              </div>

              <p className="text-gray-600 text-sm mb-2">{player.intro}</p>
              <p className="text-gray-400 text-sm mb-4">可预约: {player.available}</p>

              <button
                onClick={() => invitePlayer(player)}
                className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> 约球
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            没有找到匹配的球友
          </div>
        )}
      </div>
    </div>
  )
}
