'use client'

import { useState } from 'react'
import { Target, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react'

export default function SkillTestPage() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const questions = [
    {
      id: 1,
      question: '正手发高远球时，球应该落在哪个区域？',
      options: ['网前', '中场', '对方底线附近', '无所谓'],
      correct: 2,
    },
    {
      id: 2,
      question: '双打比赛中，谁负责接发网前球？',
      options: ['后场选手', '前场选手', '两人同时接', '视情况而定'],
      correct: 1,
    },
    {
      id: 3,
      question: '杀球时最主要的发力来源是哪里？',
      options: ['手腕', '手臂', '腰腹和转体', '手指'],
      correct: 2,
    },
    {
      id: 4,
      question: '羽毛球比赛每局有多少分？',
      options: ['11分', '15分', '21分', '25分'],
      correct: 2,
    },
    {
      id: 5,
      question: '什么情况下需要申请换球？',
      options: ['只要想换就能换', '球破损或严重变形', '每局结束', '比赛开始前'],
      correct: 1,
    },
  ]

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)

    if (current < questions.length - 1) {
      setCurrent(current + 1)
    } else {
      // Calculate result
      const correct = newAnswers.filter((a, i) => a === questions[i].correct).length
      let level = ''
      let desc = ''
      if (correct >= 4) {
        level = '高级'
        desc = '你已经掌握了扎实的羽毛球理论知识！'
      } else if (correct >= 3) {
        level = '中级'
        desc = '基础不错，还有提升空间！'
      } else {
        level = '初级'
        desc = '建议多学习基础理论知识！'
      }
      setResult({ correct, level, desc })
    }
  }

  const restart = () => {
    setStarted(false)
    setCurrent(0)
    setAnswers([])
    setResult(null)
  }

  if (result) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">测试完成！</h1>
            <p className="text-4xl font-bold text-primary mb-2">{result.level}</p>
            <p className="text-gray-500 mb-6">{result.desc}</p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-lg">正确 {result.correct} / {questions.length} 题</p>
            </div>
            <button onClick={restart} className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary flex items-center gap-2 mx-auto">
              <RotateCcw className="w-5 h-5" /> 重新测试
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <Target className="w-20 h-20 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">羽毛球等级测试</h1>
            <p className="text-gray-500 mb-6">5道题目，测试你的羽毛球知识水平</p>
            <div className="text-left bg-gray-50 rounded-xl p-4 mb-6">
              <p className="font-bold mb-2">测试规则：</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 共5道选择题</li>
                <li>• 每题只有一个正确答案</li>
                <li>• 完成后显示你的等级</li>
              </ul>
            </div>
            <button onClick={() => setStarted(true)} className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary">
              开始测试
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[current]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-md mx-auto px-4">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>题目 {current + 1} / {questions.length}</span>
            <span>{Math.round((current / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full p-4 border rounded-xl text-left hover:border-primary hover:bg-green-50 transition"
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
