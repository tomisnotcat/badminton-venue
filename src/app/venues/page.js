'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Search, Filter } from 'lucide-react'
import { venues } from '@/data/venues'

export default function VenuesPage() {
  const [search, setSearch] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  const filtered = venues.filter(v => {
    const matchSearch = v.name.includes(search) || v.address.includes(search)
    const matchPrice = priceFilter === 'all' || 
      (priceFilter === 'low' && v.price <= 25) ||
      (priceFilter === 'mid' && v.price > 25 && v.price <= 35) ||
      (priceFilter === 'high' && v.price > 35)
    return matchSearch && matchPrice
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">场地预订</h1>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索场馆名称或地址..."
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
            <option value="low">¥25以下</option>
            <option value="mid">¥25-35</option>
            <option value="high">¥35以上</option>
          </select>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(venue => (
            <Link key={venue.id} href={`/venues/${venue.id}`} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
                {venue.image}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{venue.name}</h3>
                <p className="text-gray-500 flex items-center gap-1 mb-3">
                  <MapPin className="w-4 h-4" /> {venue.address}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {venue.facilities.map(f => (
                    <span key={f} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{f}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <span className="text-2xl font-bold text-primary">¥{venue.price}</span>
                    <span className="text-gray-400 text-sm">/小时</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{venue.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            没有找到匹配的场馆
          </div>
        )}
      </div>
    </div>
  )
}
