const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎮</span>
            <span className="text-2xl font-bold text-gradient from-purple-600 to-pink-600">
              상식퀴즈
            </span>
          </div>

          {/* SNS Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} 상식퀴즈 게임. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Made with ❤️ by Quiz Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
