'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Phone, MapPin, ArrowRight, Building2, Award, User as UserIcon, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { regionData } from '@/data/regions'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', name: '', phone: '', role: 'player' })
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const handleProvinceChange = (value) => { setProvince(value); setCity(''); setDistrict('') }
  const handleCityChange = (value) => { setCity(value); setDistrict('') }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      alert('登录成功！')
    } else {
      alert(`注册成功！身份: ${roles.find(r => r.id === form.role)?.name}`)
    }
  }

  const roles = [
    { id: 'player', name: '球友', icon: '🏸', desc: '寻找球友，一起打球' },
    { id: 'coach', name: '教练', icon: '🏅', desc: '提供羽毛球教学服务' },
    { id: 'venue', name: '球馆', icon: '🏸', desc: '经营羽毛球场地' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-4xl mb-2">🏸</Link>
          <h1 className="text-3xl font-bold text-gray-800">羽球圈</h1>
          <p className="text-gray-500">一起打球，更有趣</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">{isLogin ? '登录' : '注册'}</h2>
            <p className="text-gray-500 mt-1">{isLogin ? '欢迎回来！' : '加入羽球圈'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm text-gray-500 mb-2">选择身份</label>
                <div className="grid grid-cols-3 gap-2">
                  {roles.map(role => (
                    <button key={role.id} type="button" onClick={() => setForm({...form, role: role.id})}
                      className={`p-3 rounded-xl border-2 text-center transition ${
                        form.role === role.id ? 'border-primary bg-green-50' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                      <span className="text-2xl block mb-1">{role.icon}</span>
                      <span className="text-sm font-medium">{role.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm text-gray-500 mb-1">昵称</label>
                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="请输入昵称" required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-500 mb-1">邮箱</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                  placeholder="your@email.com" required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">密码</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}
                  placeholder="请输入密码" required
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Role-specific fields */}
            {form.role === 'venue' && !isLogin && (
              <>
                <div><label className="block text-sm text-gray-500 mb-1">球馆名称</label>
                  <div className="relative"><Building2 className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="请输入球馆名称" className="w-full pl-10 pr-4 py-3 border rounded-xl" /></div>
                </div>
                <div><label className="block text-sm text-gray-500 mb-1">省/市/区</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className="px-3 py-3 border rounded-xl text-sm">
                      <option value="">请选择省</option>{provinces.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <select value={city} onChange={(e) => handleCityChange(e.target.value)} disabled={!province} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                      <option value="">请选择市</option>{cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!city} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                      <option value="">请选择区</option>{districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div><label className="block text-sm text-gray-500 mb-1">详细地址</label>
                  <div className="relative"><MapPin className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <textarea placeholder="请输入详细地址" className="w-full pl-10 pr-4 py-3 border rounded-xl" rows={2}></textarea></div>
                </div>
                <div><label className="block text-sm text-gray-500 mb-1">联系电话</label>
                  <div className="relative"><Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="tel" placeholder="请输入联系电话" className="w-full pl-10 pr-4 py-3 border rounded-xl" /></div>
                </div>
              </>
            )}

            {form.role === 'coach' && !isLogin && (
              <>
                <div><label className="block text-sm text-gray-500 mb-1">执教年限</label>
                  <select className="w-full px-4 py-3 border rounded-xl">
                    <option>1年以下</option><option>1-3年</option><option>3-5年</option><option>5年以上</option>
                  </select>
                </div>
                <div><label className="block text-sm text-gray-500 mb-1">所在地区</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className="px-3 py-3 border rounded-xl text-sm">
                      <option value="">请选择省</option>{provinces.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <select value={city} onChange={(e) => handleCityChange(e.target.value)} disabled={!province} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                      <option value="">请选择市</option>{cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!city} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                      <option value="">请选择区</option>{districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {form.role === 'player' && !isLogin && (
              <div><label className="block text-sm text-gray-500 mb-1">所在地区</label>
                <div className="grid grid-cols-3 gap-2">
                  <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} className="px-3 py-3 border rounded-xl text-sm">
                    <option value="">请选择省</option>{provinces.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  <select value={city} onChange={(e) => handleCityChange(e.target.value)} disabled={!province} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                    <option value="">请选择市</option>{cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!city} className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50">
                    <option value="">请选择区</option>{districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            )}

            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              {isLogin ? '登录' : '注册'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-500">{isLogin ? '还没有账号？' : '已有账号？'}</span>
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium hover:underline ml-1">
              {isLogin ? '立即注册' : '立即登录'}
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-gray-500 hover:text-gray-700">← 返回首页</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
