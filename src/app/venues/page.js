'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Search, Users, Clock, Phone, Filter, Grid, List } from 'lucide-react'
import { venues } from '@/data/venues'
import { regionData } from '@/data/regions'

export default function VenuesPage() {
  const [search, setSearch] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('rating')
  const [viewMode, setViewMode] = useState('grid')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const handleProvinceChange = (value) => { setProvince(value); setCity(''); setDistrict('') }
  const handleCityChange = (value) => { setCity(value); setDistrict('') }

  const filtered = venues.filter(v => {
    const matchSearch = v.name.includes(search) || v.address.includes(search)
    const matchPrice = priceFilter === 'all' || (priceFilter === 'low' && v.price <= 25) || (priceFilter === 'medium' && v.price > 25 && v.price <= 35) || (priceFilter === 'high' && v.price > 35)
    const matchProvince = !province || v.province === province
    const matchCity = !city || v.city === city
    const matchDistrict = !district || v.district === district
    return matchSearch && matchPrice && matchProvince && matchCity && matchDistrict
  }).sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'courts') return b.courts - a.courts
    return 0
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">球馆</h1>
            <p className="text-gray-500 text-sm mt-1">发现附近的优质球馆</p>
          </div>
          <span className="text-gray-500">{filtered.length} 家球馆</span>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="搜索球馆名称或地址..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-xl" />
            </div>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="px-4 py-3 border rounded-xl">
              <option value="all">全部价格</option><option value="low">25元以下</option><option value="medium">25-35元</option><option value="high">35元以上</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 border rounded-xl">
              <option value="rating">按评分</option><option value="price">按价格</option><option value="courts">按场地数</option>
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
            {filtered.map(venue => (
              <Link href={`/venues/${venue.id}`} key={venue.id}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{venue.image}</div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" /><span className="font-bold text-sm">{venue.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{venue.name}</h3>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{venue.province} {venue.city} {venue.district}</span></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{venue.hours}</span></div>
                    <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{venue.courts} 片场地</span></div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {venue.facilities.slice(0, 3).map(f => <span key={f} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">{f}</span>)}
                    {venue.facilities.length > 3 && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">+{venue.facilities.length - 3}</span>}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div><span className="text-2xl font-bold text-primary">¥{venue.price}</span><span className="text-sm text-gray-400">/小时</span></div>
                    <span className="text-primary text-sm font-medium">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">暂无匹配的球馆</h3>
            <p className="text-gray-500">试试调整筛选条件</p>
          </div>
        )}
      </div>
    </div>
  )
}
