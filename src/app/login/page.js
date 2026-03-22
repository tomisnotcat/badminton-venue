'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Phone, MapPin, ArrowRight, Building2, Award, User as UserIcon } from 'lucide-react'

// 省市区数据
const regionData = {
  '北京市': {
    '市辖区': ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '石景山区', '通州区', '顺义区', '昌平区', '大兴区', '房山区', '门头沟区', '怀柔区', '平谷区', '密云区', '延庆区']
  },
  '上海市': {
    '市辖区': ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '奉贤区', '崇明区']
  },
  '广东省': {
    '广州市': ['天河区', '越秀区', '海珠区', '荔湾区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '从化区', '增城区'],
    '深圳市': ['福田区', '罗湖区', '南山区', '宝安区', '龙岗区', '盐田区', '龙华区', '坪山区', '光明区'],
    '东莞市': ['南城区', '东城区', '莞城区', '万江区', '石碣镇', '石龙镇', '茶山镇', '石排镇', '企石镇'],
    '佛山市': ['禅城区', '南海区', '顺德区', '三水区', '高明区'],
  },
  '浙江省': {
    '杭州市': ['上城区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区', '临平区', '钱塘区'],
    '宁波市': ['海曙区', '江北区', '北仑区', '镇海区', '鄞州区', '奉化区', '余姚市', '慈溪市'],
    '温州市': ['鹿城区', '龙湾区', '瓯海区', '洞头区', '瑞安市', '乐清市', '永嘉县', '平阳县'],
  },
  '江苏省': {
    '南京市': ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水区', '高淳区'],
    '苏州市': ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区', '常熟市', '张家港市', '昆山市', '太仓市'],
    '无锡市': ['梁溪区', '滨湖区', '惠山区', '锡山区', '新吴区', '江阴市', '宜兴市'],
  },
  '四川省': {
    '成都市': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '双流区', '郫都区', '新津区'],
    '绵阳市': ['涪城区', '游仙区', '安州区', '三台县', '盐亭县', '梓潼县', '北川县', '平武县', '江油市'],
  },
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ 
    email: '', 
    password: '', 
    name: '', 
    phone: '',
    role: 'player'
  })

  // 省市区选择状态
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')

  const provinces = Object.keys(regionData)
  const cities = province ? Object.keys(regionData[province] || {}) : []
  const districts = province && city ? (regionData[province]?.[city] || []) : []

  const handleProvinceChange = (value) => {
    setProvince(value)
    setCity('')
    setDistrict('')
  }

  const handleCityChange = (value) => {
    setCity(value)
    setDistrict('')
  }

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
                    
                    {/* Province/City/District - 正确联动 */}
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">省/市/区</label>
                      <div className="grid grid-cols-3 gap-2">
                        <select 
                          value={province}
                          onChange={(e) => handleProvinceChange(e.target.value)}
                          className="px-3 py-3 border rounded-xl text-sm"
                        >
                          <option value="">请选择省</option>
                          {provinces.map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <select 
                          value={city}
                          onChange={(e) => handleCityChange(e.target.value)}
                          disabled={!province}
                          className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50"
                        >
                          <option value="">请选择市</option>
                          {cities.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <select 
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          disabled={!city}
                          className="px-3 py-3 border rounded-xl text-sm disabled:opacity-50"
                        >
                          <option value="">请选择区</option>
                          {districts.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
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
