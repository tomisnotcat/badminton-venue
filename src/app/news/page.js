'use client'

import { useState } from 'react'
import { Newspaper, Search, ChevronRight, Eye, Heart, Share2, Clock, Calendar, MessageCircle } from 'lucide-react'

export default function NewsPage() {
  const [category, setCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const news = [
    { id: 1, title: '2024年全英羽毛球公开赛精彩回顾', category: 'competition', date: '2024-03-15', views: 4567, likes: 234, image: '🏆', excerpt: '2024年全英羽毛球公开赛在伯明翰落下帷幕，中国队表现亮眼...', content: '2024年全英羽毛球公开赛是历史上最精彩的一届...', author: '体育编辑', readTime: 5 },
    { id: 2, title: '如何选择适合自己的羽毛球拍', category: 'gear', date: '2024-03-14', views: 8923, likes: 456, image: '🏸', excerpt: '选择球拍时需要考虑拍重、拍柄粗细、拍面大小等因素...', content: '选择球拍是羽毛球运动中最重要的一步...', author: '专业教练', readTime: 8 },
    { id: 3, title: '羽毛球步法训练技巧分享', category: 'technique', date: '2024-03-13', views: 3456, likes: 189, image: '👟', excerpt: '灵活的步法是羽毛球运动的基础，本文将分享...', content: '步法是羽毛球运动的灵魂...', author: '张教练', readTime: 6 },
    { id: 4, title: '新赛季羽超联赛即将开赛', category: 'competition', date: '2024-03-12', views: 2345, likes: 123, image: '⚔️', excerpt: '2024赛季中国羽毛球超级联赛将于下月正式打响...', content: '新赛季的羽超联赛看点十足...', author: '联赛官方', readTime: 3 },
    { id: 5, title: '常见羽毛球运动损伤及预防', category: 'health', date: '2024-03-11', views: 5678, likes: 345, image: '💪', excerpt: '羽毛球运动中常见的损伤包括网球肘、膝盖损伤等...', content: '预防永远大于治疗...', author: '运动医学专家', readTime: 7 },
    { id: 6, title: '世界羽联更新发球规则引争议', category: 'news', date: '2024-03-10', views: 7890, likes: 567, image: '📋', excerpt: '世界羽联最近宣布将调整发球高度规则，引发广泛讨论...', content: '新规则引发了业界的广泛讨论...', author: '国际羽联', readTime: 4 },
  ]

  const categories = [
    { id: 'all', name: '全部', icon: '📰' },
    { id: 'competition', name: '赛事', icon: '🏆' },
    { id: 'gear', name: '装备', icon: '🏸' },
    { id: 'technique', name: '技术', icon: '🎯' },
    { id: 'health', name: '健康', icon: '💪' },
    { id: 'news', name: '资讯', icon: '📢' },
  ]

  const filtered = category === 'all' ? news : news.filter(n => n.category === category)

  // Article Detail Modal
  if (selectedArticle) {
    const article = news.find(n => n.id === selectedArticle)
    return (
      <div className="min-h-screen py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <button onClick={() => setSelectedArticle(null)} className="mb-4 text-primary hover:underline flex items-center gap-1">
            ← 返回列表
          </button>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <span className="text-primary text-sm">{categories.find(c => c.id === article.category)?.name}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>{article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}分钟阅读</span>
            </div>
            <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-6 flex items-center justify-center text-7xl">
              {article.image}
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">{article.content}</p>
              <p className="text-gray-600 leading-relaxed mt-4">这是文章的主体内容部分，详细介绍了{article.title}的相关信息...</p>
            </div>
            <div className="flex items-center gap-6 mt-8 pt-6 border-t">
              <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500">
                <Heart className="w-5 h-5" /> {article.likes} 赞
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary">
                <Share2 className="w-5 h-5" /> 分享
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary">
                <MessageCircle className="w-5 h-5" /> 评论
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 ${category === cat.id ? 'bg-primary text-white' : 'bg-white'}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Featured */}
        {category === 'all' && (
          <div 
            onClick={() => setSelectedArticle(news[0].id)}
            className="bg-white rounded-2xl overflow-hidden mb-8 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="h-72 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-8xl relative">
              {news[0].image}
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm">精选</span>
            </div>
            <div className="p-6">
              <span className="text-primary text-sm">{categories.find(c => c.id === news[0].category)?.name}</span>
              <h2 className="font-bold text-2xl mt-2 mb-3">{news[0].title}</h2>
              <p className="text-gray-500 mb-4">{news[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>{news[0].author}</span>
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {news[0].views}</span>
                <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {news[0].likes}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {news[0].readTime}分钟</span>
              </div>
            </div>
          </div>
        )}

        {/* News List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div 
              key={item.id} 
              onClick={() => setSelectedArticle(item.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
                {item.image}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary text-xs">{categories.find(c => c.id === item.category)?.name}</span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{item.author}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
