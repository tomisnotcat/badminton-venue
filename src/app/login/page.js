'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Phone, MapPin, ArrowRight, Building2, Award, User as UserIcon } from 'lucide-react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ 
    email: '', 
    password: '', 
    name: '', 
    phone: '',
    role: 'player'
  })

  const roles = [
    { id: 'player', name: '球友', icon: '🏸', desc: '寻找球友，一起打球' },
    { id: 'coach', name: '教练', icon: '🏅', desc: '提供羽毛球教学服务' },
    { id: 'venue', name: '球馆', icon: '🏟️', desc: '经营羽毛球场地' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(isLogin ? '登录成功！' : `注册成功！身份：${roles.find(r => r.id === form.role)?.name}`)
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">{isLogin ? '登录' : '注册'}</h1>
            <p className="text-gray-500 mt-1">{isLogin ? '欢迎回来！' : '加入羽球圈'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                {/* Role Selection */}
                <div>
                  <label className="block text-sm text-gray-500 mb-2">选择身份</label>
                  <div className="grid grid-cols-3 gap-2">
                    {roles.map(role => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setForm({...form, role: role.id})}
                        className={`p-3 rounded-xl border-2 text-center transition ${
                          form.role === role.id 
                            ? 'border-primary bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{role.icon}</span>
                        <span className="text-sm font-medium">{role.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">昵称</label>
                  <div className="relative">
                    <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="请输入昵称"
                      required
                      className="w-full pl-10 pr-4 py-3 border rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">手机号</label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      placeholder="请输入手机号"
                      required
                      className="w-full pl-10 pr-4 py-3 border rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Additional fields based on role */}
                {form.role === 'venue' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">球馆名称</label>
                      <div className="relative">
                        <Building2 className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="请输入球馆名称"
                          className="w-full pl-10 pr-4 py-3 border rounded-xl"
                        />
                      </div>
                    </div>
                    
                    {/* Province/City/District */}
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">省/市/区</label>
                      <div className="grid grid-cols-3 gap-2">
                        <select className="px-3 py-3 border rounded-xl text-sm">
                          <option>北京市</option>
                          <option>上海市</option>
                          <option>广东省</option>
                          <option>浙江省</option>
                          <option>江苏省</option>
                        </select>
                        <select className="px-3 py-3 border rounded-xl text-sm">
                          <option>市辖区</option>
                          <option>广州市</option>
                          <option>杭州市</option>
                          <option>南京市</option>
                        </select>
                        <select className="px-3 py-3 border rounded-xl text-sm">
                          <option>朝阳区</option>
                          <option>海淀区</option>
                          <option>东城区</option>
                          <option>西城区</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-500 mb-1">详细地址</label>
                      <div className="relative">
                        <MapPin className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="请输入球馆详细地址"
                          className="w-full pl-10 pr-4 py-3 border rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">联系电话</label>
                      <div className="relative">
                        <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="请输入联系电话"
                          className="w-full pl-10 pr-4 py-3 border rounded-xl"
                        />
                      </div>
                    </div>
                  </>
                )}
                {form.role === 'coach' && (
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">执教年限</label>
                    <select className="w-full px-4 py-3 border rounded-xl">
                      <option>1年以下</option>
                      <option>1-3年</option>
                      <option>3-5年</option>
                      <option>5年以上</option>
                    </select>
                  </div>
                )}
              </>
            )}
            <div>
              <label className="block text-sm text-gray-500 mb-1">邮箱</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  placeholder="请输入邮箱"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">密码</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({...form, password: e.target.value})}
                  placeholder="请输入密码"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-xl"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-primary hover:underline">忘记密码？</a>
              </div>
            )}

            <button type="submit" className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary">
              {isLogin ? '登录' : '注册'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">
              {isLogin ? '还没有账号？' : '已有账号？'}
              <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium ml-1">
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
