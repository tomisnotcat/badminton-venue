'use client'

import { useState } from 'react'
import { Trophy, Medal, Crown, TrendingUp, Users } from 'lucide-react'

export default function RankingsPage() {
  const [type, setType] = useState('skill')
  
  const skillRankings = [
    { rank: 1, name: '陈羽', score: 4.9, wins: 156, avatar: '👨‍💼' },
    { rank: 2, name: '张教练', score: 4.7, wins: 142, avatar: '👨' },
    { rank: 3, name: '林高手', score: 4.6, wins: 128, avatar: '👨‍🏫' },
    { rank: 4, name: '王大力', score: 4.5, wins: 98, avatar: '👨‍💻' },
    { rank: 5, name: '赵腾飞', score: 4.4, wins: 87, avatar: '👨' },
    { rank: 6, name: '刘羽球', score: 4.3, wins: 76, avatar: '👨‍🔬' },
    { rank: 7, name: '周明', score: 4.2, wins: 65, avatar: '👨‍🎨' },
    { rank: 8, name: '吴珂', score: 4.1, wins: 54, avatar: '👨‍🚀' },
  ]

  const activityRankings = [
    { rank: 1, name: '李小白', games: 89, hours: 178, avatar: '👨‍💻' },
    { rank: 2, name: '张教练', games: 78, hours: 156, avatar: '👨' },
    { rank: 3, name: '陈羽', games: 72, hours: 144, avatar: '👨‍💼' },
    { rank: 4, name: '王大力', games: 65, hours: 130, avatar: '👨‍🏫' },
    { rank: 5, name: '林高手', games: 58, hours: 116, avatar: '👨‍🔬' },
  ]

  const data = type === 'skill' ? skillRankings : activityRankings

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />
    return <span className="w-6 text-center font-bold text-gray-400">{rank}</span>
  }

  const getRankBg = (rank) => {
    if (rank === 1) return 'bg-yellow-50 border-yellow-200'
    if (rank === 2) return 'bg-gray-50 border-gray-200'
    if (rank === 3) return 'bg-amber-50 border-amber-200'
    return 'bg-white'
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">排行榜</h1>
        </div>

        {/* Type Tabs */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setType('skill')} className={`px-4 py-2 rounded-full ${type === 'skill' ? 'bg-primary text-white' : 'bg-white'}`}>
            实力榜
          </button>
          <button onClick={() => setType('activity')} className={`px-4 py-2 rounded-full ${type === 'activity' ? 'bg-primary text-white' : 'bg-white'}`}>
            活跃榜
          </button>
        </div>

        {/* Top 3 */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {data.slice(0, 3).map((item, i) => (
            <div key={item.rank} className={`text-center p-6 rounded-2xl ${getRankBg(item.rank)} border`}>
              <div className="text-5xl mb-3">{item.avatar}</div>
              <div className="flex justify-center mb-2">{getRankIcon(item.rank)}</div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-primary font-bold">
                {type === 'skill' ? `等级 ${item.score}` : `${item.games} 场`}
              </p>
            </div>
          ))}
        </div>

        {/* Full List */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-medium text-gray-500">排名</th>
                <th className="text-left p-4 font-medium text-gray-500">球友</th>
                <th className="text-right p-4 font-medium text-gray-500">
                  {type === 'skill' ? '等级' : '比赛场次'}
                </th>
                <th className="text-right p-4 font-medium text-gray-500">
                  {type === 'skill' ? '胜场' : '运动时长'}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.rank} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex justify-center">{getRankIcon(item.rank)}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.avatar}</span>
                      <span className="font-bold">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-bold text-primary">
                      {type === 'skill' ? item.score : item.games}
                    </span>
                  </td>
                  <td className="p-4 text-right text-gray-500">
                    {type === 'skill' ? `${item.wins} 胜` : `${item.hours}h`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Rank */}
        <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">我的排名</p>
              <p className="text-3xl font-bold">第 42 名</p>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-2xl font-bold">↑3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
