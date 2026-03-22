'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { MapPin, Star, Calendar, Clock, Users, Check } from 'lucide-react'
import { venues } from '@/data/venues'

export default function VenueDetailPage() {
  const params = useParams()
  const router = useRouter()
  const venue = venues.find(v => v.id === parseInt(params.id))
  
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [hours, setHours] = useState(1)
  const [booking, setBooking] = useState(false)

  if (!venue) {
    return <div className="min-h-screen py-8 text-center">场馆不存在</div>
  }

  const total = venue.price * hours

  const handleBook = () => {
    if (!date || !time) {
      alert('请选择日期和时间')
      return
    }
    setBooking(true)
    setTimeout(() => {
      alert('预订成功！')
      setBooking(false)
      router.push('/my')
    }, 1000)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-8xl">
            {venue.image}
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">{venue.name}</h1>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {venue.address}
                </p>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">{venue.rating}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {venue.facilities.map(f => (
                <span key={f} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                  <Check className="w-3 h-3" /> {f}
                </span>
              ))}
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center gap-1">
                <Users className="w-3 h-3" /> {venue.courts}片场地
              </span>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="font-bold text-lg mb-4">预订场地</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">日期</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">时间</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl"
                  >
                    <option value="">选择时间</option>
                    <option value="06:00">06:00-08:00</option>
                    <option value="08:00">08:00-10:00</option>
                    <option value="10:00">10:00-12:00</option>
                    <option value="14:00">14:00-16:00</option>
                    <option value="16:00">16:00-18:00</option>
                    <option value="18:00">18:00-20:00</option>
                    <option value="20:00">20:00-22:00</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">时长</label>
                  <select
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border rounded-xl"
                  >
                    <option value={1}>1小时</option>
                    <option value={2}>2小时</option>
                    <option value={3}>3小时</option>
                    <option value={4}>4小时</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <span className="text-gray-500">总价: </span>
                  <span className="text-3xl font-bold text-primary">¥{total}</span>
                </div>
                <button
                  onClick={handleBook}
                  disabled={booking}
                  className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary disabled:opacity-50"
                >
                  {booking ? '预订中...' : '立即预订'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
