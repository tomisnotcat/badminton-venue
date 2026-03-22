'use client'

import { useState } from 'react'
import { User, Star, MapPin, Calendar, MessageCircle, Video, Award, Check, Filter } from 'lucide-react'

export default function CoachesPage() {
  const [filter, setFilter] = useState('all')
  const [showContact, setShowContact] = useState(null)

  const coaches = [
    { id: 1, name: '林丹青', avatar: '👨‍🏫', rating: 4.9, students: 1560, courses: 28, price: 300, desc: '前省队退役运动员，15年教学经验', specialty: ['单打', '进攻', '竞技'], location: '朝阳区', online: true, cert: '国家一级运动员', years: 15, certImages: ['🏆'] },
    { id: 2, name: '张伟', avatar: '👨', rating: 4.8, students: 980, courses: 20, price: 250, desc: '体育学院羽毛球专业毕业，擅长技术动作纠正', specialty: ['双打', '步伐', '体能'], location: '海淀区', online: true, cert: '高级教练员', years: 8, certImages: ['🎓'] },
    { id: 3, name: '李娜', avatar: '👩‍🏫', rating: 4.7, students: 720, courses: 15, price: 200, desc: '擅长青少年教学，性格温和有耐心', specialty: ['初学者', '少儿', '兴趣'], location: '西城区', online: false, cert: '中级教练员', years: 5, certImages: ['👶'] },
    { id: 4, name: '王建国', avatar: '👨‍🦱', rating: 4.9, students: 2100, courses: 35, price: 350, desc: '培养多名省赛获奖选手，竞技水平一流', specialty: ['竞技', '战术', '实战'], location: '东城区', online: true, cert: '国家级教练', years: 20, certImages: ['🏅', '🏆'] },
    { id: 5, name: '陈明', avatar: '👨‍💼', rating: 4.6, students: 450, courses: 12, price: 180, desc: '亲和力强，善于因材施教', specialty: ['入门', '兴趣', '成人'], location: '丰台区', online: true, cert: '初级教练员', years: 3, certImages: ['✅'] },
  ]

  const filtered = filter === 'all' ? coaches : filter === 'online' ? coaches.filter(c => c.online) : coaches.filter(c => c.location === filter)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">教练团队</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{coaches.length}</p>
            <p className="text-gray-500 text-sm">认证教练</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-500">{coaches.filter(c => c.online).length}</p>
            <p className="text-gray-500 text-sm">可线上授课</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-yellow-500">{coaches.reduce((s, c) => s + c.students, 0)}</p>
            <p className="text-gray-500 text-sm">累计学员</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-rose-500">{coaches.reduce((s, c) => s + c.courses, 0)}</p>
            <p className="text-gray-500 text-sm">开设课程</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap items-center">
          <Filter className="w-5 h-5 text-gray-400" />
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-white'}`}>全部</button>
          <button onClick={() => setFilter('online')} className={`px-4 py-2 rounded-full ${filter === 'online' ? 'bg-primary text-white' : 'bg-white'}`}>可线上授课</button>
          <button onClick={() => setFilter('朝阳区')} className={`px-4 py-2 rounded-full ${filter === '朝阳区' ? 'bg-primary text-white' : 'bg-white'}`}>朝阳区</button>
          <button onClick={() => setFilter('海淀区')} className={`px-4 py-2 rounded-full ${filter === '海淀区' ? 'bg-primary text-white' : 'bg-white'}`}>海淀区</button>
          <button onClick={() => setFilter('东城区')} className={`px-4 py-2 rounded-full ${filter === '东城区' ? 'bg-primary text-white' : 'bg-white'}`}>东城区</button>
        </div>

        {/* Coaches List */}
        <div className="space-y-4">
          {filtered.map(coach => (
            <div key={coach.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left - Avatar */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-2">
                    {coach.avatar}
                  </div>
                  {coach.online && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1 justify-center">
                      <Video className="w-3 h-3" /> 可线上
                    </span>
                  )}
                </div>

                {/* Middle - Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl">{coach.name}</h3>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{coach.cert}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{coach.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold">{coach.rating}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {coach.specialty.map(s => (
                      <span key={s} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{s}</span>
                    ))}
                    {coach.certImages.map((c, i) => (
                      <span key={i} className="text-lg">{c}</span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {coach.students} 学员</span>
                    <span className="flex items-center gap-1"><Video className="w-4 h-4" /> {coach.courses} 课程</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {coach.location}</span>
                    <span className="flex items-center gap-1"><Award className="w-4 h-4" /> 教龄 {coach.years} 年</span>
                  </div>

                  {/* Reviews Preview */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-2">学员评价：</p>
                    <p className="text-sm text-gray-600 italic">"教练非常专业，纠正了我多年的错误动作！" - 学员A</p>
                  </div>
                </div>

                {/* Right - Action */}
                <div className="flex-shrink-0 flex flex-col items-end justify-between lg:min-w-[180px]">
                  <div className="text-right mb-4">
                    <span className="text-3xl font-bold text-primary">¥{coach.price}</span>
                    <span className="text-gray-400">/小时</span>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <button 
                      onClick={() => setShowContact(showContact === coach.id ? null : coach.id)}
                      className="w-full px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-4 h-4" /> 立即咨询
                    </button>
                    <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary flex items-center justify-center gap-1">
                      <Calendar className="w-4 h-4" /> 预约试课
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Panel */}
              {showContact === coach.id && (
                <div className="mt-4 pt-4 border-t bg-green-50 rounded-xl p-4">
                  <p className="font-bold mb-2">联系教练</p>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> 在线咨询
                    </button>
                    <button className="px-4 py-2 bg-white border rounded-lg">电话联系</button>
                    <button className="px-4 py-2 bg-white border rounded-lg">预约微信</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
