'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Clock, Search, Plus } from 'lucide-react'
import { regionData } from '@/data/regions'

// 模拟约球活动数据
const mockEvents = [
  {
    id: 1,
    title: '周末双打友谊赛',
    date: '2026-03-28',
    time: '14:00-18:00',
    venue: '奥体中心羽毛球馆',
    province: '北京市',
    city: '市辖区',
    district: '朝阳区',
    currentPlayers: 8,
    maxPlayers: 12,
    level: '中级',
    fee: 30,
    organizer: '张教练',
    intro: '周末双打友谊赛，限中级以上水平，欢迎参加',
    type: '比赛',
  },
  {
    id: 2,
    title: '新手陪练活动',
    date: '2026-03-29',
    time: '10:00-12:00',
    venue: '羽之翼羽毛球中心',
    province: '北京市',
    city: '市辖区',
    district: '海淀区',
    currentPlayers: 4,
    maxPlayers: 8,
    level: '初学者',
    fee: 20,
    organizer: '李小白',
    intro: '新手陪练活动，老手带新手，互相学习',
    type: '训练',
  },
  {
    id: 3,
    title: '周末单挑战',
    date: '2026-03-28',
    time: '09:00-12:00',
    venue: '浦东羽毛球中心',
    province: '上海市',
    city: '市辖区',
    district: '浦东新区',
    currentPlayers: 6,
    maxPlayers: 16,
    level: '不限',
    fee: 25,
    organizer: '陈羽',
    intro: '单挑战，报满即止',
    type: '比赛',
  },
  {
    id: 4,
    title: '天河区球友聚会',
    date: '2026-03-30',
    time: '15:00-19:00',
    venue: '天河体育中心',
    province: '广东省',
    city: '广州市',
    district: '天河区',
    currentPlayers: 10,
    maxPlayers: 12,
    level: '高级',
    fee: 35,
    organizer: '林丹风',
    intro: '高级球友聚会，切磋技艺',
    type: '比赛',
  },
  {
    id: 5,
    title: '西湖边休闲羽球',
    date: '2026-03-29',
    time: '13:00-17:00',
    venue: '西湖羽毛球馆',
    province: '浙江省',
    city: '杭州市',
    district: '西湖区',
    currentPlayers: 5,
    maxPlayers: 10,
    level: '中级',
    fee: 28,
    organizer: '周雨',
    intro: '休闲羽球，输球请喝水',
    type: '活动',
  },
  {
    id: 6,
    title: '玄武湖羽球交流',
    date: '2026-03-30',
    time: '14:00-18:00',
    venue: '玄武羽毛球中心',
    province: '江苏省',
    city: '南京市',
    district: '玄武区',
    currentPlayers: 8,
    maxPlayers: 12,
    level: '不限',
    fee: 30,
    organizer: '吴磊',
    intro: '南京球友交流活动',
    type: '活动',
  },
]

const eventTypes = ['全部', '比赛', '训练', '活动']
const levels = ['全部', '初学者', '中级', '高级', '不限']

export default function MatchPage() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('全部')
  const [levelFilter, setLevelFilter] = useState('全部')
  const [showCreate, setShowCreate] = useState(false)
  
  // 省市区筛选
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const handleProvinceChange = (value) => {
    setProvince(value)
    setCity('')
    setDistrict('')
  }

  const handleCityChange = (value) => {
    setCity(value)
    setDistrict('')
  }

  const filtered = mockEvents.filter(e => {
    const matchSearch = e.title.includes(search) || e.venue.includes(search)
    const matchType = typeFilter === '全部' || e.type === typeFilter
    const matchLevel = levelFilter === '全部' || e.level === levelFilter || e.level === '不限'
    const matchProvince = !province || e.province === province
    const matchCity = !city || e.city === city
    const matchDistrict = !district || e.district === district
    return matchSearch && matchType && matchLevel && matchProvince && matchCity && matchDistrict
  })

  const joinEvent = (event) => {
    alert(`已报名参加"${event.title}"！`)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">约球活动</h1>
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="px-4 py-2 bg-primary text-white rounded-xl flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            发布活动
          </button>
        </div>

        {/* Create Event Form */}
        {showCreate && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border-2 border-primary">
            <h2 className="text-xl font-bold mb-4">发布新活动</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">活动名称</label>
                <input type="text" placeholder="输入活动名称" className="w-full px-4 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">活动类型</label>
                <select className="w-full px-4 py-2 border rounded-xl">
                  <option>比赛</option>
                  <option>训练</option>
                  <option>活动</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">日期</label>
                <input type="date" className="w-full px-4 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">时间</label>
                <input type="text" placeholder="如：14:00-18:00" className="w-full px-4 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">活动费用(元)</label>
                <input type="number" placeholder="0" className="w-full px-4 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">人数上限</label>
                <input type="number" placeholder="10" className="w-full px-4 py-2 border rounded-xl" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-500 mb-1">活动说明</label>
              <textarea placeholder="输入活动说明" className="w-full px-4 py-2 border rounded-xl" rows={3}></textarea>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-2 bg-primary text-white rounded-xl">发布</button>
              <button onClick={() => setShowCreate(false)} className="px-6 py-2 border rounded-xl">取消</button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 mb-8 space-y-4">
          {/* 搜索 */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索活动或场地..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl"
            />
          </div>
          
          {/* 类型和水平筛选 */}
          <div className="flex flex-wrap gap-2">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border rounded-xl"
            >
              {eventTypes.map(t => (
                <option key={t} value={t}>{t === '全部' ? '全部类型' : t}</option>
              ))}
            </select>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-4 py-2 border rounded-xl"
            >
              {levels.map(l => (
                <option key={l} value={l}>{l === '全部' ? '全部水平' : l}</option>
              ))}
            </select>
          </div>
          
          {/* 省市区筛选 */}
          <div className="grid grid-cols-3 gap-2">
            <select 
              value={province}
              onChange={(e) => handleProvinceChange(e.target.value)}
              className="px-3 py-2 border rounded-xl text-sm"
            >
              <option value="">全部省份</option>
              {provinces.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select 
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
              disabled={!province}
              className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50"
            >
              <option value="">全部城市</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select 
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!city}
              className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50"
            >
              <option value="">全部区/县</option>
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-gray-500 text-sm mb-4">
          找到 {filtered.length} 个活动
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filtered.map(event => (
            <div key={event.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === '比赛' ? 'bg-red-100 text-red-600' :
                      event.type === '训练' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {event.type}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      {event.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{event.intro}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date} {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.province} {event.city} {event.district}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.currentPlayers}/{event.maxPlayers} 人
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="text-2xl font-bold text-primary">¥{event.fee}</div>
                  <div className="text-sm text-gray-500">组织者: {event.organizer}</div>
                  <button
                    onClick={() => joinEvent(event)}
                    disabled={event.currentPlayers >= event.maxPlayers}
                    className={`px-6 py-2 rounded-xl font-medium ${
                      event.currentPlayers >= event.maxPlayers
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-green-600'
                    }`}
                  >
                    {event.currentPlayers >= event.maxPlayers ? '已满员' : '立即报名'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            暂无匹配的活动
          </div>
        )}
      </div>
    </div>
  )
}
