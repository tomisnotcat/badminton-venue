'use client'

import { useState } from 'react'
import { Search, Filter, Users, Clock, MapPin, Sparkles } from 'lucide-react'

export default function MatchPage() {
  const [tab, setTab] = useState('find')
  
  const findMatch = [
    { id: 1, name: '寻找双打搭档', skill: '3.0-4.0', time: '周末下午', location: '朝阳区', type: '双打', desc: '新手水平，想找人一起练习双打' },
    { id: 2, name: '单打约战', skill: '4.0+', time: '工作日晚上', location: '海淀区', type: '单打', desc: '业余高手，求水平相当的对手' },
    { id: 3, name: '混双缺人', skill: '3.0-4.5', time: '周六上午', location: '东城区', type: '混双', desc: '三缺一，需要一位女选手' },
    { id: 4, name: '新手陪练', skill: '1.0-2.0', time: '随时', location: '丰台区', type: '陪练', desc: '刚学球，找有经验的球友指导' },
  ]

  const myPosts = [
    { id: 1, name: '周末双打局', skill: '3.0-4.0', status: 'pending', responses: 2 },
  ]

  const createPost = () => {
    alert('发布成功！')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">约球匹配</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('find')} className={`px-4 py-2 rounded-full ${tab === 'find' ? 'bg-primary text-white' : 'bg-white'}`}>
            发现
          </button>
          <button onClick={() => setTab('create')} className={`px-4 py-2 rounded-full ${tab === 'create' ? 'bg-primary text-white' : 'bg-white'}`}>
            发布
          </button>
          <button onClick={() => setTab('my')} className={`px-4 py-2 rounded-full ${tab === 'my' ? 'bg-primary text-white' : 'bg-white'}`}>
            我的发布
          </button>
        </div>

        {tab === 'find' && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="搜索..." className="w-full pl-10 pr-4 py-2 border rounded-xl" />
              </div>
              <select className="px-4 py-2 border rounded-xl">
                <option>全部等级</option>
                <option>初学者</option>
                <option>中级</option>
                <option>高级</option>
              </select>
              <select className="px-4 py-2 border rounded-xl">
                <option>全部类型</option>
                <option>单打</option>
                <option>双打</option>
                <option>混双</option>
                <option>陪练</option>
              </select>
              <select className="px-4 py-2 border rounded-xl">
                <option>全部区域</option>
                <option>朝阳区</option>
                <option>海淀区</option>
                <option>东城区</option>
                <option>西城区</option>
              </select>
            </div>

            {/* List */}
            <div className="space-y-4">
              {findMatch.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <div className="flex gap-3 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {item.type}</span>
                        <span className="flex items-center gap-1"><Filter className="w-4 h-4" /> 等级 {item.skill}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {item.location}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary">
                      应征
                    </button>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'create' && (
          <div className="bg-white rounded-2xl p-6">
            <h2 className="font-bold text-xl mb-6">发布约球</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">标题</label>
                <input type="text" placeholder="例如：寻找双打搭档" className="w-full px-4 py-3 border rounded-xl" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">类型</label>
                  <select className="w-full px-4 py-3 border rounded-xl">
                    <option>单打</option>
                    <option>双打</option>
                    <option>混双</option>
                    <option>陪练</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">水平要求</label>
                  <select className="w-full px-4 py-3 border rounded-xl">
                    <option>不限</option>
                    <option>初学者 1.0-2.0</option>
                    <option>中级 2.0-3.5</option>
                    <option>中高级 3.5-4.5</option>
                    <option>高级 4.5+</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">时间</label>
                  <input type="text" placeholder="例如：周末下午" className="w-full px-4 py-3 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">区域</label>
                  <select className="w-full px-4 py-3 border rounded-xl">
                    <option>朝阳区</option>
                    <option>海淀区</option>
                    <option>东城区</option>
                    <option>西城区</option>
                    <option>丰台区</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">详细描述</label>
                <textarea rows={4} placeholder="描述一下你的情况和需求..." className="w-full px-4 py-3 border rounded-xl" />
              </div>
              <button onClick={createPost} className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary">
                发布
              </button>
            </div>
          </div>
        )}

        {tab === 'my' && (
          <div className="space-y-4">
            {myPosts.length > 0 ? myPosts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{post.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">等级: {post.skill}</p>
                    <p className="text-gray-500 text-sm">收到 {post.responses} 人响应</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">待确认</span>
                </div>
              </div>
            )) : (
              <div className="text-center py-12 text-gray-500">
                <p>还没有发布</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
