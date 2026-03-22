'use client'

import { useState } from 'react'
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal, Search, Plus, Send, Image, AtSign } from 'lucide-react'

export default function CommunityPage() {
  const [tab, setTab] = useState('posts')
  const [postModal, setPostModal] = useState(false)

  const posts = [
    { id: 1, author: '张教练', avatar: '👨‍🏫', title: '分享一个提升杀球速度的小技巧', content: '杀球时要充分转体，利用腰腹力量带动手臂，而不是单纯靠手臂发力。这样不仅球速更快，还能减少受伤风险。', likes: 128, comments: 32, time: '2小时前', tag: '技术分享', images: [] },
    { id: 2, author: '李小白', avatar: '👨‍💻', title: '新手求推荐入门球拍', content: '刚学羽毛球一周，想买一把趁手的球拍，预算300以内，有什么推荐吗？不要太高配置的，简单耐用就行。', likes: 45, comments: 28, time: '5小时前', tag: '装备咨询', images: [] },
    { id: 3, author: '王大力', avatar: '👨‍🏫', title: '周末奥体约球，有没有一起的', content: '本周六下午奥体中心羽毛球场，四人双打，水平不限，纯锻炼身体，欢迎加入！', likes: 67, comments: 15, time: '1天前', tag: '约球', images: [] },
    { id: 4, author: '陈羽', avatar: '👨‍💼', title: '讨论：业余选手要不要穿专业球鞋', content: '个人观点：如果只是为了出汗锻炼，普通运动鞋就够了。但如果有伤病史或者想提升水平，还是建议买专业羽毛球鞋。', likes: 89, comments: 42, time: '2天前', tag: '讨论', images: [] },
  ]

  const questions = [
    { id: 1, title: '如何判断羽毛球拍磅数是否适合自己？', answers: 12, votes: 34, author: '新手小白', time: '1天前' },
    { id: 2, title: '打球时总是打框怎么办？', answers: 8, votes: 21, author: '羽毛球爱好者', time: '2天前' },
    { id: 3, title: '有没有适合大体重的球友的球鞋推荐？', answers: 15, votes: 28, author: '大体重球友', time: '3天前' },
    { id: 4, title: '拉线时磅数越高越好吗？', answers: 20, votes: 56, author: '装备控', time: '5天前' },
  ]

  const tags = ['技术分享', '装备咨询', '约球', '讨论', '比赛', '健康']

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">社区</h1>
          </div>
          <button 
            onClick={() => setPostModal(true)}
            className="px-4 py-2 bg-primary text-white rounded-full flex items-center gap-2 hover:bg-secondary"
          >
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
          <button onClick={() => setTab('hot')} className={`px-4 py-2 rounded-full ${tab === 'hot' ? 'bg-primary text-white' : 'bg-white'}`}>
            🔥 热门
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="搜索帖子..." className="w-full pl-10 pr-4 py-3 border rounded-xl bg-white" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tags.map(tag => (
            <button key={tag} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 hover:text-primary hover:border-primary border">
              {tag}
            </button>
          ))}
        </div>

        {tab === 'posts' && (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
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
                  <button className="flex items-center gap-1 text-gray-500 hover:text-rose-500">
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
              <div key={q.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">{q.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{q.author}</span>
                      <span>{q.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{q.answers}</p>
                    <p className="text-xs text-gray-500">回答</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">👍 {q.votes} 赞</span>
                  <button className="text-primary hover:underline">我来回答</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'hot' && (
          <div className="space-y-4">
            {[...posts, ...questions].sort(() => Math.random() - 0.5).slice(0, 4).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔥</span>
                  <span className="font-bold text-lg">{item.title || item.content?.slice(0, 30)}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.likes || item.votes} 赞 · {item.comments || item.answers} 评论</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Modal */}
      {postModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-bold">发布新帖</h3>
              <button onClick={() => setPostModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-4">
              <input type="text" placeholder="标题" className="w-full border rounded-xl px-4 py-3 mb-4" />
              <textarea rows={4} placeholder="分享你的想法..." className="w-full border rounded-xl px-4 py-3 mb-4" />
              <div className="flex gap-2 mb-4">
                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm">
                  <Image className="w-4 h-4" /> 图片
                </button>
                <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm">
                  <AtSign className="w-4 h-4" /> @好友
                </button>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border rounded-lg">
                  <option>选择标签</option>
                  {tags.map(t => <option key={t}>{t}</option>)}
                </select>
                <button className="flex-1 py-2 bg-primary text-white rounded-lg">发布</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
