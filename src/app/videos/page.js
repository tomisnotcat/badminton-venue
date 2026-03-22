'use client'

import { useState } from 'react'
import { Play, Clock, Eye, ThumbsUp, Search, Filter, Star, User, ChevronRight, Volume2, Monitor } from 'lucide-react'

export default function VideosPage() {
  const [category, setCategory] = useState('all')
  const [playing, setPlaying] = useState(null)
  const [search, setSearch] = useState('')

  const videos = [
    { id: 1, title: '羽毛球正手高远球完整示范', duration: '8:32', views: 45600, likes: 2340, level: '初学者', image: '🎬', desc: '详细讲解正手高远球的动作要领，发力技巧', author: '林丹青教练', durationMin: 8.5, quality: '1080P' },
    { id: 2, title: '双打站位与轮换教学', duration: '12:15', views: 34500, likes: 1890, level: '中级', image: '🎬', desc: '双打配合核心技巧，攻防转换', author: '张伟教练', durationMin: 12.25, quality: '1080P' },
    { id: 3, title: '网前小球技术精讲', duration: '10:08', views: 28900, likes: 1560, level: '中级', image: '🎬', desc: '提升网前得分能力', author: '李娜教练', durationMin: 10.1, quality: '720P' },
    { id: 4, title: '后场杀球力量训练', duration: '15:45', views: 52300, likes: 3210, level: '高级', image: '🎬', desc: '增强杀球力度和速度', author: '王建国教练', durationMin: 15.75, quality: '1080P' },
    { id: 5, title: '羽毛球步伐完整教程', duration: '20:30', views: 67800, likes: 4560, level: '全部', image: '🎬', desc: '全场步伐移动技巧', author: '张伟教练', durationMin: 20.5, quality: '1080P' },
    { id: 6, title: '反手吊球技巧分享', duration: '9:20', views: 23400, likes: 1230, level: '中级', image: '🎬', desc: '反手技术进阶', author: '林丹青教练', durationMin: 9.3, quality: '720P' },
    { id: 7, title: '发球技巧与注意事项', duration: '7:45', views: 41200, likes: 2100, level: '初学者', image: '🎬', desc: '正确发球姿势', author: '李娜教练', durationMin: 7.75, quality: '1080P' },
    { id: 8, title: '体能训练指南', duration: '18:00', views: 34500, likes: 1890, level: '全部', image: '🎬', desc: '羽毛球专项体能', author: '王建国教练', durationMin: 18, quality: '720P' },
  ]

  const categories = [
    { id: 'all', name: '全部', count: videos.length },
    { id: 'beginner', name: '初学者', count: videos.filter(v => v.level === '初学者').length },
    { id: 'intermediate', name: '中级', count: videos.filter(v => v.level === '中级').length },
    { id: 'advanced', name: '高级', count: videos.filter(v => v.level === '高级').length },
  ]

  const filtered = videos.filter(v => {
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase()) || v.author.includes(search)
    const matchCategory = category === 'all' || v.level === category || (category === 'beginner' && v.level === '初学者') || (category === 'intermediate' && v.level === '中级') || (category === 'advanced' && v.level === '高级')
    return matchSearch && matchCategory
  })

  // Video Player Modal
  if (playing) {
    const video = videos.find(v => v.id === playing)
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
          <div className="relative bg-black aspect-video flex items-center justify-center">
            <button onClick={() => setPlaying(null)} className="absolute top-4 right-4 text-white text-xl hover:bg-white/20 rounded-full p-2">✕</button>
            <Play className="w-20 h-20 text-white opacity-50" />
            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm">{video.duration}</div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {video.views.toLocaleString()}</span>
              <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> {video.likes.toLocaleString()}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {video.author}</span>
              <span className="flex items-center gap-1"><Monitor className="w-4 h-4" /> {video.quality}</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-bold mb-2">课程简介</p>
              <p className="text-gray-600">{video.desc}</p>
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
          <Play className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">教学视频</h1>
          <span className="text-gray-400 text-sm">共 {videos.length} 个视频</span>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索视频或讲师..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl" 
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-1 ${category === cat.id ? 'bg-primary text-white' : 'bg-white'}`}
            >
              {cat.name}
              <span className="text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Video */}
        {category === 'all' && !search && (
          <div 
            onClick={() => setPlaying(videos[0].id)}
            className="bg-white rounded-2xl overflow-hidden mb-8 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group cursor-pointer">
              <Play className="w-20 h-20 text-white opacity-60 group-hover:opacity-100 group-hover:scale-110 transition" />
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/20 backdrop-blur text-white rounded text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> {videos[0].duration}
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-rose-500 text-white rounded-full text-sm">
                {videos[0].quality}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{videos[0].level}</span>
                <span className="text-gray-400 text-sm flex items-center gap-1"><User className="w-3 h-3" /> {videos[0].author}</span>
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
          {filtered.map(video => (
            <div 
              key={video.id} 
              onClick={() => setPlaying(video.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="relative h-36 bg-gray-100 flex items-center justify-center group">
                <Play className="w-12 h-12 text-gray-400 group-hover:text-primary group-hover:scale-110 transition" />
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white rounded text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {video.duration}
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-rose-500 text-white rounded text-xs">
                  {video.quality}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary">{video.level}</span>
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">{video.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {video.author}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views > 1000 ? (video.views/1000).toFixed(1) + 'k' : video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            没有找到匹配的视频
          </div>
        )}
      </div>
    </div>
  )
}
