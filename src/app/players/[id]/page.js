'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Trophy, Star, MessageCircle, Calendar, User, Heart, Share2, CheckCircle } from 'lucide-react'
import { players } from '@/data/venues'

export default function PlayerDetailPage({ params }) {
  const player = players.find(p => p.id === parseInt(params.id))
  const [liked, setLiked] = useState(false)

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-4">球友未找到</h1>
          <Link href="/players" className="text-primary hover:underline">返回球友列表</Link>
        </div>
      </div>
    )
  }

  const winRate = player.matches ? Math.round((player.wins / player.matches) * 100) : 0

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/players" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />返回
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setLiked(!liked)} className={`p-2 rounded-full ${liked ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-500'} hover:bg-gray-100`}>
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="text-8xl">{player.avatar}</div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">{player.level}</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">水平: {player.skill}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{player.province} {player.city} {player.district}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-3xl font-bold">{player.matches || 0}</div>
            <div className="text-gray-500 text-sm">参赛次数</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-3xl font-bold">{player.wins || 0}</div>
            <div className="text-gray-500 text-sm">获胜次数</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-3xl font-bold">{winRate}%</div>
            <div className="text-gray-500 text-sm">胜率</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <User className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <div className="text-3xl font-bold">{player.age || 30}</div>
            <div className="text-gray-500 text-sm">年龄</div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-lg mb-4">个人简介</h2>
          <p className="text-gray-600 leading-relaxed">{player.intro}</p>
        </div>

        {/* Tags */}
        {player.tags && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-bold text-lg mb-4">标签</h2>
            <div className="flex flex-wrap gap-2">
              {player.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Available Time */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-lg mb-4">可约时间</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5 text-primary" />
            <span>{player.available}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link href="/match" className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-center hover:bg-green-600 transition">
            发起约球
          </Link>
          <Link href="/messages" className="flex-1 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-center hover:bg-green-50 transition flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />发消息
          </Link>
        </div>
      </div>
    </div>
  )
}
