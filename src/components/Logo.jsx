import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.1"/>
          <path 
            d="M12 8L28 8C30.2091 8 32 9.79086 32 12V28C32 30.2091 30.2091 32 28 32H12C9.79086 32 8 30.2091 8 28V12C8 9.79086 9.79086 8 12 8Z" 
            fill="url(#logoGradient)"
          />
          <path 
            d="M16 14H24C24.5523 14 25 14.4477 25 15V17C25 17.5523 24.5523 18 24 18H16C15.4477 18 15 17.5523 15 17V15C15 14.4477 15.4477 14 16 14Z" 
            fill="white"
          />
          <path 
            d="M16 20H22C22.5523 20 23 20.4477 23 21V23C23 23.5523 22.5523 24 22 24H16C15.4477 24 15 23.5523 15 23V21C15 20.4477 15.4477 20 16 20Z" 
            fill="white"
          />
          <path 
            d="M16 26H20C20.5523 26 21 26.4477 21 27V27C21 27.5523 20.5523 28 20 28H16C15.4477 28 15 27.5523 15 27V27C15 26.4477 15.4477 26 16 26Z" 
            fill="white"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold font-display gradient-text">
          BlogSphere
        </h1>
        <p className="text-xs text-neutral-500 font-medium tracking-wide">
          Share Your Stories
        </p>
      </div>
    </div>
  )
}

export default Logo
