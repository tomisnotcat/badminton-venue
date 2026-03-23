'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Users, Clock, Phone, ArrowLeft, CheckCircle, Calendar } from 'lucide-react'
import { venues } from '@/data/venues'

export default function VenueDetailPage({ params }) {
  const venue = venues.find(v => v.id === parseInt(params.id))
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const [showBooking, setShowBooking] = useState(false)

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-4">球馆未找到</h1>
          <Link href="/venues" className="text-primary hover:underline">
            返回球馆列表
          </Link>
        </div>
      </div>
    )
  }

  const handleBooking = () => {
    if (!bookingDate || !bookingTime) {
      alert('请选择日期和时间')
      return
    }
    alert(`预约成功！\n球馆：${venue.name}\n日期：${bookingDate}\n时间：${bookingTime}`)
    setShowBooking(false)
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Back Button */}
      <div className="bg-white sticky top-16 z-40 border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/venues" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
            返回球馆列表
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="text-7xl">{venue.image}</div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span>{venue.province} {venue.city} {venue.district}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-xl font-bold">{venue.rating}</span>
              </div>
              <span className="text-gray-500 text-sm">评分</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 py-6 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">¥{venue.price}</div>
              <div className="text-gray-500 text-sm">每小时</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{venue.courts}</div>
              <div className="text-gray-500 text-sm">片场地</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{venue.hours}</span>
              </div>
              <div className="text-gray-500 text-sm">营业时间</div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">详细信息</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="font-medium">详细地址</div>
                <div className="text-gray-500">{venue.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <div className="font-medium">联系电话</div>
                <div className="text-gray-500">{venue.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">设施服务</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {venue.facilities.map(facility => (
              <div key={facility} className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">预约场地</h2>
          
          {!showBooking ? (
            <button
              onClick={() => setShowBooking(true)}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              立即预约
            </button>
          ) : (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">选择日期</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">选择时间段</label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl"
                  >
                    <option value="">请选择时间</option>
                    <option value="06:00-08:00">06:00-08:00</option>
                    <option value="08:00-10:00">08:00-10:00</option>
                    <option value="10:00-12:00">10:00-12:00</option>
                    <option value="12:00-14:00">12:00-14:00</option>
                    <option value="14:00-16:00">14:00-16:00</option>
                    <option value="16:00-18:00">16:00-18:00</option>
                    <option value="18:00-20:00">18:00-20:00</option>
                    <option value="20:00-22:00">20:00-22:00</option>
                  </select>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">场地费用</span>
                  <span className="font-bold">¥{venue.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">时段</span>
                  <span className="font-bold">2小时</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-bold">合计</span>
                  <span className="font-bold text-primary text-xl">¥{venue.price * 2}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleBooking}
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition"
                >
                  确认预约
                </button>
                <button
                  onClick={() => setShowBooking(false)}
                  className="px-6 py-4 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition"
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
