import Link from 'next/link'
import { MapPin, Users, Calendar, ArrowRight, Star } from 'lucide-react'
import { venues, players, events } from '@/data/venues'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">一起打球，更有趣</h1>
          <p className="text-xl mb-8 opacity-90">找场地、约球友、参加比赛，就在羽球圈</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/venues" className="px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">
              订场地
            </Link>
            <Link href="/players" className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
              找球友
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-gray-500">合作场馆</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-gray-500">活跃球友</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-gray-500">每周活动</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.8</p>
              <p className="text-gray-500">平均评分</p>
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">热门场地</h2>
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
                    <MapPin className="w-3 h-3" /> {venue.address}
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
              <div key={player.id} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">{player.avatar}</div>
                <h3 className="font-bold mb-1">{player.name}</h3>
                <p className="text-primary text-sm mb-2">等级 {player.skill}</p>
                <p className="text-gray-500 text-sm">{player.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">近期活动</h2>
            <Link href="/events" className="text-primary flex items-center gap-1 hover:underline">
              查看更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map(event => (
              <div key={event.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{event.venue}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {event.players}/{event.maxPlayers} 人
                  </span>
                  <span className="font-bold text-primary">¥{event.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
