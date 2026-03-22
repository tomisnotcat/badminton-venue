'use client'

import { useState } from 'react'
import { User, Star, MapPin, Calendar, MessageCircle, Video, Award } from 'lucide-react'

export default function CoachesPage() {
  const [filter, setFilter] = useState('all')

  const coaches = [
    { id: 1, name: '林丹青', avatar: '👨‍🏫', rating: 4.9, students: 1560, courses: 28, price: 300, desc: '前省队退役运动员，15年教学经验', specialty: ['单打', '进攻'], location: '朝阳区', online: true, cert: '国家一级运动员' },
    { id: 2, name: '张伟', avatar: '👨', rating: 4.8, students: 980, courses: 20, price: 250, desc: '体育学院羽毛球专业毕业', specialty: ['双打', '步伐'], location: '海淀区', online: true, cert: '高级教练员' },
    { id: 3, name: '李娜', avatar: '👩‍🏫', rating: 4.7, students: 720, courses: 15, price: 200, desc: '擅长青少年教学，性格温和', specialty: ['初学者', '体能'], location: '西城区', online: false, cert: '中级教练员' },
    { id: 4, name: '王建国', avatar: '👨‍🦱', rating: 4.9, students: 2100, courses: 35, price: 350, desc: '培养多名省赛获奖选手', specialty: ['竞技', '战术'], location: '东城区', online: true, cert: '国家级教练' },
    { id: 5, name: '陈明', avatar: '👨‍💼', rating: 4.6, students: 450, courses: 12, price: 180, desc: '亲和力强，善于因材施教', specialty: ['入门', '兴趣'], location: '丰台区', online: true, cert: '初级教练员' },
  ]

  const filtered = filter === 'all' ? coaches : filter === 'online' ? coaches.filter(c => c.online) : coaches.filter(c => c.location === filter)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">教练团队</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-white'}`}>全部</button>
          <button onClick={() => setFilter('online')} className={`px-4 py-2 rounded-full ${filter === 'online' ? 'bg-primary text-white' : 'bg-white'}`}>可线上授课</button>
          <button onClick={() => setFilter('朝阳区')} className={`px-4 py-2 rounded-full ${filter === '朝阳区' ? 'bg-primary text-white' : 'bg-white'}`}>朝阳区</button>
          <button onClick={() => setFilter('海淀区')} className={`px-4 py-2 rounded-full ${filter === '海淀区' ? 'bg-primary text-white' : 'bg-white'}`}>海淀区</button>
        </div>

        {/* Coaches List */}
        <div className="space-y-4">
          {filtered.map(coach => (
            <div key={coach.id} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 text-center">
                <div className="text-6xl mb-2">{coach.avatar}</div>
                {coach.online && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">可线上</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-xl">{coach.name}</h3>
                    <p className="text-gray-500 text-sm">{coach.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-bold">{coach.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {coach.specialty.map(s => (
                    <span key={s} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{s}</span>
                  ))}
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{coach.cert}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {coach.students} 学员</span>
                  <span className="flex items-center gap-1"><Video className="w-4 h-4" /> {coach.courses} 课程</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {coach.location}</span>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-end justify-between">
                <div className="text-right mb-4">
                  <span className="text-3xl font-bold text-primary">¥{coach.price}</span>
                  <span className="text-gray-400">/小时</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> 咨询
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> 预约
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
