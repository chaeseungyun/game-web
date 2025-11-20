import { useState, useEffect } from 'react'

interface HeroProps {
  scrollY: number
}

const Hero = ({ scrollY }: HeroProps) => {
  const [typedText, setTypedText] = useState('')
  const fullText = '당신의 상식을 테스트하세요!'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            left: '10%',
            top: '20%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            right: '10%',
            top: '30%',
            animationDelay: '1s',
            transform: `translate(-${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            left: '50%',
            bottom: '20%',
            animationDelay: '2s',
            transform: `translate(-50%, ${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
          <span className="text-gradient from-purple-600 via-pink-600 to-indigo-600 inline-block">
            상식 퀴즈 게임
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 h-12 sm:h-14">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          재미있는 퀴즈로 당신의 지식을 테스트하고, 친구들과 경쟁하며, 새로운 것을 배워보세요.
          다양한 카테고리의 수백 가지 문제가 당신을 기다립니다!
        </p>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow hidden lg:block">
          <div className="text-6xl opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
            🎯
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float hidden lg:block">
          <div className="text-6xl opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
            💡
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse-slow hidden lg:block">
          <div className="text-6xl opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
            🏆
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default Hero
