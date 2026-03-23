'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Users, Clock, Phone, ArrowLeft, CheckCircle, Calendar, MessageCircle, Share2, Heart } from 'lucide-react'
import { venues } from '@/data/venues'

export default function VenueDetailPage({ params }) {
  const venue = venues.find(v => v.id === parseInt(params.id))
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const [showBooking, setShowBooking] = useState(false)
  const [liked, setLiked] = useState(false)

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-4">球馆未找到</h1>
          <Link href="/venues" className="text-primary hover:underline">返回球馆列表</Link>
        </div>
      </div>
    )
  }

  const handleBooking = () => {
    if (!bookingDate || !bookingTime) { alert('请选择日期和时间'); return }
    alert(`预约成功！\n球馆：${venue.name}\n日期：${bookingDate}\n时间：${bookingTime}`)
    setShowBooking(false)
  }

  const timeSlots = ['06:00-08:00', '08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00']

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/venues" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
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
        {/* Main Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-8xl">{venue.image}</div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-3">{venue.name}</h1>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{venue.province} {venue.city} {venue.district}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Clock className="w-5 h-5" />
                <span>{venue.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold">{venue.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">{venue.courts} 片场地</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Contact */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">¥{venue.price}</div>
            <div className="text-gray-500 text-sm">每小时</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-1">{venue.courts}</div>
            <div className="text-gray-500 text-sm">场地数量</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <a href={`tel:${venue.phone}`} className="flex items-center justify-center gap-2 text-primary hover:text-green-600">
              <Phone className="w-5 h-5" />
              <span className="font-bold">联系球馆</span>
            </a>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-lg mb-4">设施服务</h2>
          <div className="flex flex-wrap gap-2">
            {venue.facilities.map((f, i) => (
              <span key={i} className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />{f}
              </span>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-lg mb-4">详细地址</h2>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium">{venue.address}</p>
              <p className="text-gray-500 text-sm">{venue.province} {venue.city} {venue.district}</p>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">立即预约</h2>
            <span className="text-primary font-bold text-2xl">¥{venue.price}<span className="text-sm text-gray-400">/小时</span></span>
          </div>
          
          {!showBooking ? (
            <button onClick={() => setShowBooking(true)} className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-green-600 transition">
              预约场地
            </button>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-2">选择日期</label>
                <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">选择时间段</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(slot => (
                    <button key={slot} onClick={() => setBookingTime(slot)}
                      className={`py-2 rounded-lg text-sm font-medium transition ${
                        bookingTime === slot ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                      }`}>{slot}</button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowBooking(false)} className="flex-1 py-3 border rounded-xl hover:bg-gray-50">取消</button>
                <button onClick={handleBooking} className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-green-600">确认预约</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
