'use client'

import { useState } from 'react'
import { MessageCircle, Search, Send, Phone, Video, MoreVertical, User, Building2, Award } from 'lucide-react'

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState('')

  const currentUser = { name: '我', avatar: '🏸' }

  const users = [
    { id: 1, name: '张教练', avatar: '👨‍🏫', role: '教练', lastMsg: '好的，周六上午可以吗？', time: '10:30', unread: 2 },
    { id: 2, name: '奥体中心', avatar: '🏟️', role: '球馆', lastMsg: '场地已预订成功', time: '昨天', unread: 0 },
    { id: 3, name: '李小白', avatar: '👨‍💻', role: '球友', lastMsg: '周六下午一起去打球？', time: '昨天', unread: 0 },
    { id: 4, name: '王教练', avatar: '👨', role: '教练', lastMsg: '明天上午9点上课', time: '周一', unread: 0 },
    { id: 5, name: '阳光球馆', avatar: '🏸', avatar: '🏟️', role: '球馆', lastMsg: '欢迎下次光临', time: '周一', unread: 0 },
  ]

  const messages = {
    1: [
      { id: 1, sender: 1, text: '你好，我想预约周六的课程', time: '10:00' },
      { id: 2, sender: 'me', text: '好的，请问上午还是下午？', time: '10:05' },
      { id: 3, sender: 1, text: '上午比较好，9点可以吗？', time: '10:10' },
      { id: 4, sender: 'me', text: '没问题，我有时间', time: '10:15' },
      { id: 5, sender: 1, text: '好的，周六上午可以吗？', time: '10:30' },
    ],
    2: [
      { id: 1, sender: 2, text: '您好，请问要预订场地吗？', time: '昨天 14:00' },
      { id: 2, sender: 'me', text: '是的，我想预订周六下午', time: '昨天 14:05' },
      { id: 3, sender: 2, text: '场地已预订成功', time: '昨天 14:10' },
    ],
  }

  const getRoleIcon = (role) => {
    if (role === '教练') return <Award className="w-3 h-3" />
    if (role === '球馆') return <Building2 className="w-3 h-3" />
    return <User className="w-3 h-3" />
  }

  const getRoleColor = (role) => {
    if (role === '教练') return 'text-amber-500'
    if (role === '球馆') return 'text-blue-500'
    return 'text-gray-500'
  }

  const selectedUser = users.find(u => u.id === selectedChat)
  const chatMessages = messages[selectedChat] || []

  const sendMessage = () => {
    if (!newMessage.trim()) return
    alert('消息已发送：' + newMessage)
    setNewMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold">消息</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex" style={{ height: '600px' }}>
          {/* Left - User List */}
          <div className="w-80 border-r flex flex-col">
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="搜索..." className="w-full pl-10 pr-4 py-2 border rounded-xl" />
              </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
              {users.map(user => (
                <button
                  key={user.id}
                  onClick={() => setSelectedChat(user.id)}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition ${selectedChat === user.id ? 'bg-green-50' : ''}`}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {user.avatar}
                    </div>
                    {user.unread > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {user.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-gray-400">{user.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`text-xs ${getRoleColor(user.role)}`}>{getRoleIcon(user.role)}</span>
                      <span className="text-xs text-gray-400">{user.role}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{user.lastMsg}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedUser ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{selectedUser.avatar}</div>
                    <div>
                      <h3 className="font-bold">{selectedUser.name}</h3>
                      <span className={`text-xs ${getRoleColor(selectedUser.role)}`}>{selectedUser.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Video className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] ${msg.sender === 'me' ? 'order-2' : ''}`}>
                        {msg.sender !== 'me' && (
                          <div className="text-xs text-gray-400 mb-1">{selectedUser.name}</div>
                        )}
                        <div className={`px-4 py-2 rounded-2xl ${
                          msg.sender === 'me' 
                            ? 'bg-primary text-white rounded-br-sm' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                        }`}>
                          {msg.text}
                        </div>
                        <div className={`text-xs text-gray-400 mt-1 ${msg.sender === 'me' ? 'text-right' : ''}`}>
                          {msg.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="输入消息..."
                      className="flex-1 px-4 py-3 border rounded-full"
                    />
                    <button 
                      onClick={sendMessage}
                      className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                选择一个对话开始聊天
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
