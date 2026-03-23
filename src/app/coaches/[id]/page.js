'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Users, ArrowLeft, CheckCircle, Calendar } from 'lucide-react'
import { coaches } from '@/data/venues'

export default function CoachDetailPage({ params }) {
  const coach = coaches.find(c => c.id === parseInt(params.id))
  const [showBooking, setShowBooking] = useState(false)
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')

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

  const handleBooking = () => {
    if (!bookingDate || !bookingTime) {
      alert('请选择日期和时间')
      return
    }
    alert(`预约成功！\n教练：${coach.name}\n日期：${bookingDate}\n时间：${bookingTime}`)
    setShowBooking(false)
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-white sticky top-16 z-40 border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/coaches" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />返回教练列表
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-start gap-6">
            <div className="text-8xl">{coach.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{coach.name}</h1>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{coach.title}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />{coach.province} {coach.city} {coach.district}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />{coach.experience}教龄
                </div>
              </div>
              <p className="text-gray-600">{coach.intro}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary mb-1">¥{coach.price}</div>
              <div className="text-gray-400 text-sm">/小时</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" /><span className="text-2xl font-bold">{coach.rating}</span>
              </div>
              <div className="text-gray-500 text-sm">评分</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{coach.students}</div>
              <div className="text-gray-500 text-sm">累计学员</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">{coach.experience}</div>
              <div className="text-gray-500 text-sm">执教年限</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">资质认证</h2>
          <div className="flex flex-wrap gap-2">
            {coach.certifications?.map(cert => (
              <span key={cert} className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />{cert}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">预约课程</h2>
          {!showBooking ? (
            <button onClick={() => setShowBooking(true)} className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />立即预约
            </button>
          ) : (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">选择日期</label>
                  <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">选择时间段</label>
                  <select value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} className="w-full px-4 py-3 border rounded-xl">
                    <option value="">请选择时间</option>
                    <option value="08:00-10:00">08:00-10:00</option>
                    <option value="10:00-12:00">10:00-12:00</option>
                    <option value="14:00-16:00">14:00-16:00</option>
                    <option value="16:00-18:00">16:00-18:00</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between mb-2"><span className="text-gray-500">课程费用</span><span className="font-bold">¥{coach.price}/小时</span></div>
                <div className="flex justify-between mb-2"><span className="text-gray-500">时长</span><span className="font-bold">2小时</span></div>
                <div className="flex justify-between pt-2 border-t"><span className="font-bold">合计</span><span className="font-bold text-primary text-xl">¥{coach.price * 2}</span></div>
              </div>
              <div className="flex gap-4">
                <button onClick={handleBooking} className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition">确认预约</button>
                <button onClick={() => setShowBooking(false)} className="px-6 py-4 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition">取消</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
