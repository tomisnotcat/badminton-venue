import Link from 'next/link'
import { MapPin, Star, Users, Clock, Phone, ArrowLeft, CheckCircle } from 'lucide-react'
import { venues } from '@/data/venues'

export default function VenueDetailPage({ params }) {
  const venue = venues.find(v => v.id === parseInt(params.id))

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">球馆未找到</h1>
          <Link href="/venues" className="text-primary hover:underline">
            返回球馆列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/venues" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-5 h-5" />
          返回球馆列表
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-6xl mb-4">{venue.image}</div>
              <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-5 h-5" />
                <span>{venue.province} {venue.city} {venue.district}</span>
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

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition">
            立即预约
          </button>
          <button className="px-6 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-green-50 transition">
            联系球馆
          </button>
        </div>
      </div>
    </div>
  )
}
