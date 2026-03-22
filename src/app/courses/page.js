'use client'

import { useState } from 'react'
import { School, Clock, Users, Star, Play, Lock, Check } from 'lucide-react'

export default function CoursesPage() {
  const [category, setCategory] = useState('all')
  const [preview, setPreview] = useState(null)

  const courses = [
    { id: 1, title: '羽毛球入门基础', level: '初学者', hours: 8, students: 1234, rating: 4.8, price: 99, image: '🏸', desc: '从握拍到发球，系统学习羽毛球基础', chapters: ['握拍方法', '站位姿势', '基本发球', '正手击球'], free: true },
    { id: 2, title: '正手高远球技巧', level: '初级', hours: 4, students: 856, rating: 4.9, price: 59, image: '🎯', desc: '掌握高远球，提升击球力量和准确性', chapters: ['挥拍动作', '发力技巧', '击球点'], free: true },
    { id: 3, title: '双打配合战术', level: '中级', hours: 6, students: 642, rating: 4.7, price: 129, image: '🤝', desc: '学习双打站位轮换，提升配合默契', chapters: ['站位原则', '轮换技巧', '进攻配合', '防守站位'], free: false },
    { id: 4, title: '网前小球技术', level: '中级', hours: 5, students: 528, rating: 4.8, price: 89, image: '🕸️', desc: '精进网前技术，增加得分手段', chapters: ['搓球', '勾球', '推球', '扑球'], free: false },
    { id: 5, title: '后场杀球训练', level: '高级', hours: 6, students: 445, rating: 4.9, price: 149, image: '💥', desc: '强力杀球，让对手无从招架', chapters: ['杀球动作', '落点控制', '变速杀球'], free: false },
    { id: 6, title: '体能与步伐训练', level: '全部', hours: 10, students: 1890, rating: 4.6, price: 79, image: '💪', desc: '提升体能素质，敏捷步伐', chapters: ['步伐训练', '体能储备', '柔韧性'], free: true },
  ]

  const categories = ['全部', '初学者', '初级', '中级', '高级']

  const filtered = category === 'all' ? courses : courses.filter(c => c.level === category || (category === '初学者' && c.level === '初学者') || (category === '初级' && c.level === '初级') || (category === '中级' && c.level === '中级') || (category === '高级' && c.level === '高级'))

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">羽毛球课程</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">免费</span>
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full">付费</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${category === cat ? 'bg-primary text-white' : 'bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
                {course.image}
                {course.free && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs rounded-full">免费</span>
                )}
                <button 
                  onClick={() => setPreview(course.id)}
                  className="absolute w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
                >
                  <Play className="w-5 h-5 text-primary ml-1" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{course.level}</span>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" /> {course.rating}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{course.desc}</p>
                
                {/* Chapters Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">课程章节：</p>
                  <div className="flex flex-wrap gap-1">
                    {course.chapters.slice(0, 3).map((ch, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{ch}</span>
                    ))}
                    {course.chapters.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">+{course.chapters.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.hours}课时</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-2xl font-bold text-primary">¥{course.price}</span>
                  <button className={`px-4 py-2 rounded-lg flex items-center gap-1 ${course.free ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-primary text-white hover:bg-secondary'}`}>
                    {course.free ? <Play className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    {course.free ? '开始学习' : '购买'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
