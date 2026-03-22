'use client'

import { useState } from 'react'
import { ShoppingBag, Search, Filter, Heart, ShoppingCart, Star } from 'lucide-react'

export default function ShopPage() {
  const [category, setCategory] = useState('all')

  const products = [
    { id: 1, name: '尤尼克斯 NF700', category: 'racket', price: 1280, image: '🏸', sales: 234, rating: 4.9, desc: '超轻量碳纤维球拍' },
    { id: 2, name: '李宁 N99', category: 'racket', price: 980, image: '🏸', sales: 156, rating: 4.8, desc: '进攻型球拍' },
    { id: 3, name: 'AS-50 比赛球', category: 'ball', price: 68, image: '⚪', sales: 567, rating: 4.7, desc: '国际比赛用球' },
    { id: 4, name: '尤尼克斯 AC102C', category: 'shoes', price: 458, image: '👟', sales: 189, rating: 4.6, desc: '专业羽毛球鞋' },
    { id: 5, name: '李宁超轻背包', category: 'bag', price: 198, image: '🎒', sales: 321, rating: 4.5, desc: '多功能运动背包' },
    { id: 6, name: '专业吸汗带', category: 'accessory', price: 25, image: '🩹', sales: 890, rating: 4.4, desc: '10条装' },
    { id: 7, name: '胜利 JS-12F', category: 'racket', price: 1380, image: '🏸', sales: 98, rating: 4.9, desc: '速度型球拍' },
    { id: 8, name: '护腕套装', category: 'accessory', price: 39, image: '🧤', sales: 456, rating: 4.3, desc: '吸汗护腕+护指' },
  ]

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'racket', name: '球拍' },
    { id: 'ball', name: '羽毛球' },
    { id: 'shoes', name: '球鞋' },
    { id: 'bag', name: '背包' },
    { id: 'accessory', name: '配件' },
  ]

  const filtered = category === 'all' ? products : products.filter(p => p.category === category)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">运动商城</h1>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="搜索商品..." className="w-full pl-10 pr-4 py-3 border rounded-xl" />
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${category === cat.id ? 'bg-primary text-white' : 'bg-white'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" /> {product.rating}
                  </div>
                  <span className="text-gray-400 text-sm">销量 {product.sales}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">¥{product.price}</span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Heart className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-primary text-white rounded-lg hover:bg-secondary">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
