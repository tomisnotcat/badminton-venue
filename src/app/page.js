import Link from 'next/link'
import { MapPin, Users, Calendar, Award, ArrowRight, Star, Clock, Trophy, MessageCircle } from 'lucide-react'
import { venues, players, coaches } from '@/data/venues'

export default function HomePage() {
  return (
    <div className="min-h-screen">
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-gray-500">合作球馆</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-gray-500">活跃球友</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-gray-500">专业教练</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50,000+</div>
              <div className="text-gray-500">约球次数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/venues" className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-1">球馆预订</h3>
              <p className="text-gray-500 text-sm">附近场地一键预约</p>
            </Link>
            <Link href="/players" className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-1">找球友</h3>
              <p className="text-gray-500 text-sm">同城球友随时约起</p>
            </Link>
            <Link href="/match" className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition">
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-lg mb-1">发起约球</h3>
              <p className="text-gray-500 text-sm">发布活动等人响应</p>
            </Link>
            <Link href="/coaches" className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-lg mb-1">专业教练</h3>
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
              <Link key={venue.id} href={`/venues/${venue.id}`} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group">
                <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-5xl group-hover:scale-110 transition">
                  {venue.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1 group-hover:text-primary transition">{venue.name}</h3>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {players.slice(0, 5).map(player => (
              <Link key={player.id} href="/players" className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition">{player.avatar}</div>
                <h3 className="font-bold group-hover:text-primary transition">{player.name}</h3>
                <p className="text-gray-500 text-sm">{player.level}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-gray-400 text-sm">
                  <Trophy className="w-3 h-3 text-yellow-500" /> {player.wins} 胜
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">优秀教练</h2>
            <Link href="/coaches" className="text-primary flex items-center gap-1 hover:underline">
              查看更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.slice(0, 3).map(coach => (
              <div key={coach.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{coach.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg">{coach.name}</h3>
                    <p className="text-gray-500 text-sm">{coach.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" /> {coach.rating}
                  </span>
                  <span>{coach.students} 学员</span>
                  <span>{coach.experience}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{coach.intro}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">¥{coach.price}<span className="text-sm text-gray-400">/时</span></span>
                  <Link href="/coaches" className="px-4 py-2 bg-primary text-white rounded-xl text-sm hover:bg-green-600 transition">
                    预约
                  </Link>
                </div>
              </div>
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
