'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Star, Users, Award, Calendar, Phone, MessageCircle, Heart, Share2, CheckCircle } from 'lucide-react'
import { coaches } from '@/data/venues'

export default function CoachDetailPage({ params }) {
  const coach = coaches.find(c => c.id === parseInt(params.id))
  const [bookingDate, setBookingDate] = useState('')
  const [showBooking, setShowBooking] = useState(false)
  const [liked, setLiked] = useState(false)

  if (!coach) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-4">教练未找到</h1>
          <Link href="/coaches" className="text-primary hover:underline">返回教练列表</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/coaches" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
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
            <div className="text-8xl">{coach.avatar}</div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{coach.name}</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm">{coach.title}</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">{coach.experience}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{coach.province} {coach.city} {coach.district}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold">{coach.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">{coach.students} 学员</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">¥{coach.price}</div>
            <div className="text-gray-500 text-sm">每小时</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">{coach.students}</div>
            <div className="text-gray-500 text-sm">累计学员</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">{coach.experience}</div>
            <div className="text-gray-500 text-sm">执教经验</div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-lg mb-4">个人简介</h2>
          <p className="text-gray-600 leading-relaxed">{coach.intro}</p>
        </div>

        {/* Certifications */}
        {coach.certifications && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-bold text-lg mb-4">资质认证</h2>
            <div className="flex flex-wrap gap-2">
              {coach.certifications.map((cert, i) => (
                <span key={i} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />{cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Specialties */}
        {coach.specialties && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="font-bold text-lg mb-4">专长领域</h2>
            <div className="flex flex-wrap gap-2">
              {coach.specialties.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Booking */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">预约课程</h2>
            <span className="text-primary font-bold text-2xl">¥{coach.price}<span className="text-sm text-gray-400">/小时</span></span>
          </div>
          
          {!showBooking ? (
            <button onClick={() => setShowBooking(true)} className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-green-600 transition">
              预约课程
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-2">选择日期</label>
                <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowBooking(false)} className="flex-1 py-3 border rounded-xl hover:bg-gray-50">取消</button>
                <button onClick={() => alert('预约成功！')} className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-green-600">确认预约</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
