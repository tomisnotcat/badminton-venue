import Link from 'next/link'
import { MapPin, Users, Calendar, Award, ArrowRight, Star, Clock } from 'lucide-react'
import { venues, players } from '@/data/venues'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">一起打球，更有趣</h1>
          <p className="text-xl mb-8 opacity-90">找球馆、约球友、找教练，就上羽球圈</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/venues" className="px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">
              🏀 找球馆
            </Link>
            <Link href="/match" className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
              📅 去约球
            </Link>
            <Link href="/coaches" className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
              🏅 找教练
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/venues" className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">球馆预订</h3>
              <p className="text-gray-500 text-sm">附近场地一键预约</p>
            </Link>
            <Link href="/players" className="bg-blue-50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg">找球友</h3>
              <p className="text-gray-500 text-sm">同城球友随时约起</p>
            </Link>
            <Link href="/match" className="bg-purple-50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <Calendar className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg">发起约球</h3>
              <p className="text-gray-500 text-sm">发布活动等人响应</p>
            </Link>
            <Link href="/coaches" className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <Award className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg">专业教练</h3>
              <p className="text-gray-500 text-sm">预约教学提升水平</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">热门球馆</h2>
            <Link href="/venues" className="text-primary flex items-center gap-1 hover:underline">
              查看更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.slice(0, 4).map(venue => (
              <Link key={venue.id} href={`/venues/${venue.id}`} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-5xl">
                  {venue.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{venue.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3" /> {venue.district}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">¥{venue.price}/小时</span>
                    <span className="flex items-center gap-1 text-yellow-500 text-sm">
                      <Star className="w-4 h-4 fill-current" /> {venue.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Players */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">活跃球友</h2>
            <Link href="/players" className="text-primary flex items-center gap-1 hover:underline">
              查看更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.slice(0, 4).map(player => (
              <Link key={player.id} href="/players" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition">
                <div className="text-5xl mb-3">{player.avatar}</div>
                <h3 className="font-bold">{player.name}</h3>
                <p className="text-gray-500 text-sm">{player.level}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-gray-400 text-sm">
                  <MapPin className="w-3 h-3" /> {player.district}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入羽球圈</h2>
          <p className="text-xl mb-8 opacity-90">和更多球友一起享受羽毛球的乐趣</p>
          <Link href="/login" className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition">
            立即注册
          </Link>
        </div>
      </section>
    </div>
  )
}
