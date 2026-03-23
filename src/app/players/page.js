'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Search, MessageCircle, Trophy } from 'lucide-react'
import { players } from '@/data/venues'
import { regionData } from '@/data/regions'

export default function PlayersPage() {
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [sortBy, setSortBy] = useState('skill')
  
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const filtered = players.filter(p => {
    const matchSearch = p.name.includes(search) || p.intro.includes(search)
    const matchLevel = levelFilter === 'all' || p.level === levelFilter
    const matchProvince = !province || p.province === province
    const matchCity = !city || p.city === city
    const matchDistrict = !district || p.district === district
    return matchSearch && matchLevel && matchProvince && matchCity && matchDistrict
  }).sort((a, b) => {
    if (sortBy === 'skill') return parseFloat(b.skill) - parseFloat(a.skill)
    if (sortBy === 'wins') return (b.wins || 0) - (a.wins || 0)
    if (sortBy === 'age') return a.age - b.age
    return 0
  })

  const handleProvinceChange = (value) => { setProvince(value); setCity(''); setDistrict('') }
  const handleCityChange = (value) => { setCity(value); setDistrict('') }

  const getWinRate = (player) => {
    if (!player.matches || player.matches === 0) return 0
    return Math.round((player.wins / player.matches) * 100)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">球友</h1>
          <span className="text-gray-500">{filtered.length} 位球友</span>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="搜索球友..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-xl" />
            </div>
            <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className="px-4 py-3 border rounded-xl">
              <option value="all">全部等级</option>
              <option value="初学者">初学者</option>
              <option value="中级球友">中级</option>
              <option value="高级球友">高级</option>
              <option value="资深球友">资深</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 border rounded-xl">
              <option value="skill">按水平</option>
              <option value="wins">按胜率</option>
              <option value="age">按年龄</option>
            </select>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className="px-3 py-2 border rounded-xl text-sm">
              <option value="">全部省份</option>
              {provinces.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={city} onChange={(e) => handleCityChange(e.target.value)} disabled={!province} className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50">
              <option value="">全部城市</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!city} className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50">
              <option value="">全部区/县</option>
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(player => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{player.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p className="text-gray-500 text-sm">{player.level}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{player.district}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{player.skill}</div>
                    <div className="text-xs text-gray-400">水平</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{player.intro}</p>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span>{player.wins || 0} 胜</span>
                  </div>
                  <div className="text-green-600 font-medium">{getWinRate(player)}% 胜率</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-500">{player.available}</span>
                  <span className="text-primary text-sm font-medium">查看详情 →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center py-12 text-gray-500">暂无匹配的球友</div>}
      </div>
    </div>
  )
}
