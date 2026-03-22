'use client'

import { useState } from 'react'
import { Play, Clock, Eye, ThumbsUp, ChevronRight, Search, Filter } from 'lucide-react'

export default function VideosPage() {
  const [category, setCategory] = useState('all')

  const videos = [
    { id: 1, title: '羽毛球正手高远球完整示范', duration: '8:32', views: 45600, likes: 2340, level: '初学者', image: '🎬', desc: '详细讲解正手高远球的动作要领' },
    { id: 2, title: '双打站位与轮换教学', duration: '12:15', views: 34500, likes: 1890, level: '中级', image: '🎬', desc: '双打配合核心技巧' },
    { id: 3, title: '网前小球技术精讲', duration: '10:08', views: 28900, likes: 1560, level: '中级', image: '🎬', desc: '提升网前得分能力' },
    { id: 4, title: '后场杀球力量训练', duration: '15:45', views: 52300, likes: 3210, level: '高级', image: '🎬', desc: '增强杀球力度和速度' },
    { id: 5, title: '羽毛球步伐完整教程', duration: '20:30', views: 67800, likes: 4560, level: '全部', image: '🎬', desc: '全场步伐移动技巧' },
    { id: 6, title: '反手吊球技巧分享', duration: '9:20', views: 23400, likes: 1230, level: '中级', image: '🎬', desc: '反手技术进阶' },
    { id: 7, title: '发球技巧与注意事项', duration: '7:45', views: 41200, likes: 2100, level: '初学者', image: '🎬', desc: '正确发球姿势' },
    { id: 8, title: '体能训练指南', duration: '18:00', views: 34500, likes: 1890, level: '全部', image: '🎬', desc: '羽毛球专项体能' },
  ]

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'beginner', name: '初学者' },
    { id: 'intermediate', name: '中级' },
    { id: 'advanced', name: '高级' },
  ]

  const filtered = category === 'all' ? videos : videos.filter(v => v.level === category || (category === 'beginner' && v.level === '初学者') || (category === 'intermediate' && v.level === '中级') || (category === 'advanced' && v.level === '高级'))

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Play className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">教学视频</h1>
        </div>

        {/* Search */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="搜索视频..." className="w-full pl-10 pr-4 py-3 border rounded-xl" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full ${category === cat.id ? 'bg-primary text-white' : 'bg-white'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        {category === 'all' && (
          <div className="bg-white rounded-2xl overflow-hidden mb-8 shadow-sm">
            <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group cursor-pointer">
              <Play className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition" />
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white rounded text-sm">
                {videos[0].duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{videos[0].level}</span>
              </div>
              <h2 className="font-bold text-2xl mb-2">{videos[0].title}</h2>
              <p className="text-gray-500 mb-4">{videos[0].desc}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {videos[0].views.toLocaleString()}</span>
                <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> {videos[0].likes.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category !== 'all' ? filtered : videos.slice(1).map(video => (
            <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="relative h-40 bg-gray-100 flex items-center justify-center group">
                <Play className="w-12 h-12 text-gray-400 group-hover:text-primary transition" />
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary">{video.level}</span>
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{video.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views > 1000 ? (video.views/1000).toFixed(1) + 'k' : video.views}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {video.likes > 1000 ? (video.likes/1000).toFixed(1) + 'k' : video.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
