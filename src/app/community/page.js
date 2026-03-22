'use client'

import { useState } from 'react'
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal, Search, Plus } from 'lucide-react'

export default function CommunityPage() {
  const [tab, setTab] = useState('posts')

  const posts = [
    { id: 1, author: '张教练', avatar: '👨', title: '分享一个提升杀球速度的小技巧', content: '杀球时要充分转体，利用腰腹力量带动手臂，而不是单纯靠手臂发力。这样不仅球速更快，还能减少受伤风险。', likes: 128, comments: 32, time: '2小时前', tag: '技术分享' },
    { id: 2, author: '李小白', avatar: '👨‍💻', title: '新手求推荐入门球拍', content: '刚学羽毛球一周，想买一把趁手的球拍，预算300以内，有什么推荐吗？不要太高配置的，简单耐用就行。', likes: 45, comments: 28, time: '5小时前', tag: '装备咨询' },
    { id: 3, author: '王大力', avatar: '👨‍🏫', title: '周末奥体约球，有没有一起的', content: '本周六下午奥体中心羽毛球场，四人双打，水平不限，纯锻炼身体，欢迎加入！', likes: 67, comments: 15, time: '1天前', tag: '约球' },
    { id: 4, author: '陈羽', avatar: '👨‍💼', title: '讨论：业余选手要不要穿专业球鞋', content: '个人观点：如果只是为了出汗锻炼，普通运动鞋就够了。但如果有伤病史或者想提升水平，还是建议买专业羽毛球鞋。', likes: 89, comments: 42, time: '2天前', tag: '讨论' },
  ]

  const questions = [
    { id: 1, title: '如何判断羽毛球拍磅数是否适合自己？', answers: 12, votes: 34 },
    { id: 2, title: '打球时总是打框怎么办？', answers: 8, votes: 21 },
    { id: 3, title: '有没有适合大体重的球友的球鞋推荐？', answers: 15, votes: 28 },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">社区</h1>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-full flex items-center gap-2 hover:bg-secondary">
            <Plus className="w-4 h-4" /> 发帖
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('posts')} className={`px-4 py-2 rounded-full ${tab === 'posts' ? 'bg-primary text-white' : 'bg-white'}`}>
            帖子
          </button>
          <button onClick={() => setTab('questions')} className={`px-4 py-2 rounded-full ${tab === 'questions' ? 'bg-primary text-white' : 'bg-white'}`}>
            问答
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="搜索帖子..." className="w-full pl-10 pr-4 py-3 border rounded-xl" />
        </div>

        {tab === 'posts' && (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">{post.avatar}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{post.author}</h3>
                        <p className="text-gray-400 text-sm">{post.time}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 bg-green-50 text-green-700 rounded text-xs mb-2">{post.tag}</span>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center gap-6 pt-3 border-t">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                    <ThumbsUp className="w-5 h-5" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                    <MessageCircle className="w-5 h-5" /> {post.comments}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                    <Share2 className="w-5 h-5" /> 分享
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'questions' && (
          <div className="space-y-4">
            {questions.map(q => (
              <div key={q.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{q.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{q.answers} 个回答</span>
                  <span>{q.votes} 赞同</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
