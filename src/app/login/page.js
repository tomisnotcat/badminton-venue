'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: '', password: '', name: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(isLogin ? '登录成功！' : '注册成功！')
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
                <div>
                  <label className="block text-sm text-gray-500 mb-1">昵称</label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="请输入昵称"
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
                      className="w-full pl-10 pr-4 py-3 border rounded-xl"
                    />
                  </div>
                </div>
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

          <div className="mt-6 pt-6 border-t">
            <p className="text-center text-gray-400 text-sm">其他登录方式</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </button>
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
