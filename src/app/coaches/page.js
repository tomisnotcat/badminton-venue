'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Search, Users, Award, CheckCircle } from 'lucide-react'
import { coaches } from '@/data/venues'
import { regionData } from '@/data/regions'

export default function CoachesPage() {
  const [search, setSearch] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('rating')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const handleProvinceChange = (value) => { setProvince(value); setCity(''); setDistrict('') }
  const handleCityChange = (value) => { setCity(value); setDistrict('') }

  const filtered = coaches.filter(c => {
    const matchSearch = c.name.includes(search) || c.intro.includes(search)
    const matchPrice = priceFilter === 'all' || (priceFilter === 'low' && c.price <= 120) || (priceFilter === 'medium' && c.price > 120 && c.price <= 180) || (priceFilter === 'high' && c.price > 180)
    const matchProvince = !province || c.province === province
    const matchCity = !city || c.city === city
    const matchDistrict = !district || c.district === district
    return matchSearch && matchPrice && matchProvince && matchCity && matchDistrict
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'price') return a.price - b.price
    if (sortBy === 'students') return b.students - a.students
    return 0
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">教练</h1>
            <p className="text-gray-500 text-sm mt-1">找到最适合你的羽毛球教练</p>
          </div>
          <span className="text-gray-500">{filtered.length} 位教练</span>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="搜索教练..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-xl" />
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="px-4 py-2 border rounded-xl">
              <option value="all">全部价格</option><option value="low">120元以下</option><option value="medium">120-180元</option><option value="high">180元以上</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border rounded-xl">
              <option value="rating">按评分</option><option value="price">按价格</option><option value="students">按学员数</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className="px-3 py-2 border rounded-xl text-sm">
              <option value="">全部省份</option>{provinces.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={city} onChange={(e) => handleCityChange(e.target.value)} disabled={!province} className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50">
              <option value="">全部城市</option>{cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!city} className="px-3 py-2 border rounded-xl text-sm disabled:opacity-50">
              <option value="">全部区/县</option>{districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(coach => (
              <Link href={`/coaches/${coach.id}`} key={coach.id}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{coach.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{coach.name}</h3>
                      <p className="text-gray-500 text-sm">{coach.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{coach.district}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">¥{coach.price}</div>
                      <div className="text-xs text-gray-400">/小时</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{coach.intro}</p>
                  {coach.certifications && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {coach.certifications.slice(0, 2).map(cert => <span key={cert} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{cert}</span>)}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" /><span>{coach.rating}</span>
                      </div>
                      <span>{coach.students} 学员</span>
                    </div>
                    <span className="text-primary text-sm font-medium">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">暂无匹配的教练</h3>
            <p className="text-gray-500">试试调整筛选条件</p>
          </div>
        )}
      </div>
    </div>
  )
}
