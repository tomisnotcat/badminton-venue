'use client'

import { useState } from 'react'
import { Newspaper, Search, ChevronRight, Eye, Heart, Share2 } from 'lucide-react'

export default function NewsPage() {
  const [category, setCategory] = useState('all')

  const news = [
    { id: 1, title: '2024年全英羽毛球公开赛精彩回顾', category: 'competition', date: '2024-03-15', views: 4567, likes: 234, image: '🏆', excerpt: '2024年全英羽毛球公开赛在伯明翰落下帷幕，中国队表现亮眼...' },
    { id: 2, title: '如何选择适合自己的羽毛球拍', category: 'gear', date: '2024-03-14', views: 8923, likes: 456, image: '🏸', excerpt: '选择球拍时需要考虑拍重、拍柄粗细、拍面大小等因素...' },
    { id: 3, title: '羽毛球步法训练技巧分享', category: 'technique', date: '2024-03-13', views: 3456, likes: 189, image: '👟', excerpt: '灵活的步法是羽毛球运动的基础，本文将分享...' },
    { id: 4, title: '新赛季羽超联赛即将开赛', category: 'competition', date: '2024-03-12', views: 2345, likes: 123, image: '⚔️', excerpt: '2024赛季中国羽毛球超级联赛将于下月正式打响...' },
    { id: 5, title: '常见羽毛球运动损伤及预防', category: 'health', date: '2024-03-11', views: 5678, likes: 345, image: '💪', excerpt: '羽毛球运动中常见的损伤包括网球肘、膝盖损伤等...' },
    { id: 6, title: '世界羽联更新发球规则引争议', category: 'news', date: '2024-03-10', views: 7890, likes: 567, image: '📋', excerpt: '世界羽联最近宣布将调整发球高度规则，引发广泛讨论...' },
  ]

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'competition', name: '赛事' },
    { id: 'gear', name: '装备' },
    { id: 'technique', name: '技术' },
    { id: 'health', name: '健康' },
    { id: 'news', name: '资讯' },
  ]

  const filtered = category === 'all' ? news : news.filter(n => n.category === category)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">羽毛球资讯</h1>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="搜索资讯..." className="w-full pl-10 pr-4 py-3 border rounded-xl" />
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

        {/* Featured */}
        {category === 'all' && (
          <div className="bg-white rounded-2xl overflow-hidden mb-8 shadow-sm">
            <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-8xl">
              {news[0].image}
            </div>
            <div className="p-6">
              <span className="text-primary text-sm">{categories.find(c => c.id === news[0].category)?.name}</span>
              <h2 className="font-bold text-2xl mt-2 mb-3">{news[0].title}</h2>
              <p className="text-gray-500 mb-4">{news[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>{news[0].date}</span>
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {news[0].views}</span>
                <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {news[0].likes}</span>
              </div>
            </div>
          </div>
        )}

        {/* News List */}
        <div className="space-y-4">
          {filtered.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 hover:shadow-md transition">
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                {item.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary text-sm">{categories.find(c => c.id === item.category)?.name}</span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-1">{item.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {item.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {item.likes}</span>
                  <button className="flex items-center gap-1 hover:text-primary"><Share2 className="w-4 h-4" /> 分享</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
