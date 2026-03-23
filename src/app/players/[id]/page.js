'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, ArrowLeft, Trophy, MessageCircle, Calendar } from 'lucide-react'
import { players } from '@/data/venues'

export default function PlayerDetailPage({ params }) {
  const player = players.find(p => p.id === parseInt(params.id))

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

  const getWinRate = () => {
    if (!player.matches || player.matches === 0) return 0
    return Math.round((player.wins / player.matches) * 100)
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-white sticky top-16 z-40 border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/players" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />返回球友列表
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-start gap-6">
            <div className="text-8xl">{player.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{player.name}</h1>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{player.level}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />{player.province} {player.city} {player.district}
                </div>
                <div>可约: {player.available}</div>
              </div>
              <p className="text-gray-600">{player.intro}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary mb-1">{player.skill}</div>
              <div className="text-gray-400 text-sm">技术水平</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">战绩统计</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center bg-green-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-primary mb-1">{player.matches}</div>
              <div className="text-gray-500 text-sm">参赛次数</div>
            </div>
            <div className="text-center bg-yellow-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{player.wins}</div>
              <div className="text-gray-500 text-sm">获胜次数</div>
            </div>
            <div className="text-center bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">{getWinRate()}%</div>
              <div className="text-gray-500 text-sm">胜率</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">约球</h2>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />发起约球
            </button>
            <button className="px-6 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-green-50 transition flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />发消息
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
