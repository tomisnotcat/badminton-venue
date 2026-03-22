'use client'

import { useState } from 'react'
import { School, Clock, Users, Star, ChevronRight, Play } from 'lucide-react'

export default function CoursesPage() {
  const [category, setCategory] = useState('all')

  const courses = [
    { id: 1, title: '羽毛球入门基础', level: '初学者', hours: 8, students: 1234, rating: 4.8, price: 99, image: '🏸', desc: '从握拍到发球，系统学习羽毛球基础' },
    { id: 2, title: '正手高远球技巧', level: '初级', hours: 4, students: 856, rating: 4.9, price: 59, image: '🎯', desc: '掌握高远球，提升击球力量和准确性' },
    { id: 3, title: '双打配合战术', level: '中级', hours: 6, students: 642, rating: 4.7, price: 129, image: '🤝', desc: '学习双打站位轮换，提升配合默契' },
    { id: 4, title: '网前小球技术', level: '中级', hours: 5, students: 528, rating: 4.8, price: 89, image: '🕸️', desc: '精进网前技术，增加得分手段' },
    { id: 5, title: '后场杀球训练', level: '高级', hours: 6, students: 445, rating: 4.9, price: 149, image: '💥', desc: '强力杀球，让对手无从招架' },
    { id: 6, title: '体能与步伐训练', level: '全部', hours: 10, students: 1890, rating: 4.6, price: 79, image: '💪', desc: '提升体能素质，敏捷步伐' },
  ]

  const categories = ['全部', '初学者', '初级', '中级', '高级']

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <School className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">羽毛球课程</h1>
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
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
                {course.image}
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
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.hours}课时</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-2xl font-bold text-primary">¥{course.price}</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary flex items-center gap-1">
                    <Play className="w-4 h-4" /> 购买
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
