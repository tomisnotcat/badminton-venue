'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Search, Users } from 'lucide-react'
import { venues } from '@/data/venues'
import { regionData } from '@/data/regions'

export default function VenuesPage() {
  const [search, setSearch] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  
  // 省市区筛选
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const filtered = venues.filter(v => {
    const matchSearch = v.name.includes(search) || v.address.includes(search)
    const matchPrice = priceFilter === 'all' || 
      (priceFilter === 'low' && v.price <= 25) ||
      (priceFilter === 'medium' && v.price > 25 && v.price <= 35) ||
      (priceFilter === 'high' && v.price > 35)
    const matchProvince = !province || v.province === province
    const matchCity = !city || v.city === city
    const matchDistrict = !district || v.district === district
    return matchSearch && matchPrice && matchProvince && matchCity && matchDistrict
  })

  const handleProvinceChange = (value) => {
    setProvince(value)
    setCity('')
    setDistrict('')
  }

  const handleCityChange = (value) => {
    setCity(value)
    setDistrict('')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">球馆</h1>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 mb-8 space-y-4">
          {/* 搜索和价格筛选 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索球馆..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl"
              />
            </div>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-4 py-3 border rounded-xl"
            >
              <option value="all">全部价格</option>
              <option value="low">25元以下</option>
              <option value="medium">25-35元</option>
              <option value="high">35元以上</option>
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

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(venue => (
            <Link href={`/venues/${venue.id}`} key={venue.id}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{venue.image}</div>
                <h3 className="font-bold text-lg">{venue.name}</h3>
                <div className="flex items-center gap-2 text-gray-500 mt-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{venue.province} {venue.city} {venue.district}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-primary">¥{venue.price}<span className="text-sm text-gray-400">/小时</span></span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{venue.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{venue.courts} 片场地</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            暂无匹配的球馆
          </div>
        )}
      </div>
    </div>
  )
}
