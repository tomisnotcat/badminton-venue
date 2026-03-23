'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Send, Phone, Video, MoreVertical, MessageCircle, ArrowLeft } from 'lucide-react'

const mockChats = [
  { id: 1, name: '张教练', role: 'coach', roleName: '教练', avatar: '👨🏸', lastMessage: '好的，周六下午见', time: '10:30', unread: 2, online: true },
  { id: 2, name: '王大力', role: 'player', roleName: '球友', avatar: '👨🏫', lastMessage: '明天一起去打球吗？', time: '昨天', unread: 0, online: false },
  { id: 3, name: '奥体中心', role: 'venue', roleName: '球馆', avatar: '🏸', lastMessage: '您的预约已确认', time: '昨天', unread: 0, online: true },
  { id: 4, name: '林丹风', role: 'player', roleName: '球友', avatar: '👨🎓', lastMessage: '下次一起双打', time: '3天前', unread: 0, online: true },
]

const mockMessages = [
  { id: 1, sender: 'other', text: '你好！想约你周六打球', time: '10:00' },
  { id: 2, sender: 'me', text: '周六可以啊，什么时间？', time: '10:05' },
  { id: 3, sender: 'other', text: '下午2点到6点，奥体中心羽毛球馆', time: '10:10' },
  { id: 4, sender: 'me', text: '没问题几个人？', time: '10:15' },
  { id: 5, sender: 'other', text: '目前4个人，再找2个', time: '10:20' },
  { id: 6, sender: 'other', text: '好的，周六下午见', time: '10:30' },
]

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(mockChats[0])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')

  const filteredChats = mockChats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  const sendMessage = () => {
    if (!message.trim()) return
    alert(`发送成功: ${message}`)
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto h-screen py-4 px-4">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/my" className="p-2 hover:bg-gray-200 rounded-full"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="text-2xl font-bold text-gray-800">消息</h1>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-[calc(100vh-120px)] flex">
          <div className="w-1/3 border-r flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="搜索..." value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl text-sm" />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {filteredChats.map(chat => (
                <div key={chat.id} onClick={() => setSelectedChat(chat)}
                  className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition ${
                    selectedChat?.id === chat.id ? 'bg-green-50 border-l-4 border-primary' : ''
                  }`}>
                  <div className="relative">
                    <div className="text-3xl">{chat.avatar}</div>
                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium truncate">{chat.name}</span>
                      <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 truncate">{chat.lastMessage}</span>
                      {chat.unread > 0 && <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{chat.unread}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className="p-4 border-b flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{selectedChat.avatar}</div>
                    <div>
                      <div className="font-bold">{selectedChat.name}</div>
                      <div className="text-xs text-gray-500">{selectedChat.roleName}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full"><Phone className="w-5 h-5 text-gray-600" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full"><Video className="w-5 h-5 text-gray-600" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full"><MoreVertical className="w-5 h-5 text-gray-600" /></button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {mockMessages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                        msg.sender === 'me' ? 'bg-primary text-white rounded-br-md' : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                      }`}>
                        <p>{msg.text}</p>
                        <div className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-green-100' : 'text-gray-400'}`}>{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white border-t">
                  <div className="flex items-center gap-2">
                    <input type="text" placeholder="输入消息..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
                    <button onClick={sendMessage} className="p-3 bg-primary text-white rounded-full hover:bg-green-600 transition">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>选择聊天对象开始对话</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
