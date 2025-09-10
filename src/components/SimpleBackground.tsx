'use client';

export default function SimpleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fondo principal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e3f] via-[#1a3a5c] to-[#0ab0ff]" />
      
      {/* Ondas fluidas animadas con CSS */}
      <div className="absolute inset-0 opacity-30">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      
      {/* Líneas blancas elegantes */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Líneas principales */}
          <path
            d="M 1600,100 Q 1400,300 1200,400 Q 1000,500 800,600 Q 600,700 400,800"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
            filter="url(#glow)"
          />
          
          <path
            d="M 1500,150 Q 1300,350 1100,450 Q 900,550 700,650 Q 500,750 300,850"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            filter="url(#glow)"
          />
          
          <path
            d="M 1400,200 Q 1200,400 1000,500 Q 800,600 600,700 Q 400,800 200,900"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          {/* Líneas horizontales */}
          <path
            d="M 0,300 Q 480,280 960,300 Q 1440,320 1920,300"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,500 Q 480,480 960,500 Q 1440,520 1920,500"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          <path
            d="M 0,700 Q 480,680 960,700 Q 1440,720 1920,700"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
          />
        </svg>
      </div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3f]/20 via-transparent to-[#0ab0ff]/10" />
      
      {/* Efectos de iluminación */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#0ab0ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#1a3a5c]/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0b1e3f]/6 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <style jsx>{`
        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, 
            rgba(10, 176, 255, 0.1) 0%, 
            rgba(26, 58, 92, 0.2) 25%, 
            rgba(11, 30, 63, 0.1) 50%, 
            rgba(10, 176, 255, 0.15) 75%, 
            rgba(26, 58, 92, 0.1) 100%);
          border-radius: 50%;
          animation: wave-animation 20s infinite linear;
        }
        
        .wave1 {
          top: -50%;
          left: -50%;
          animation-duration: 20s;
          animation-delay: 0s;
        }
        
        .wave2 {
          top: -30%;
          left: -30%;
          animation-duration: 25s;
          animation-delay: -5s;
        }
        
        .wave3 {
          top: -40%;
          left: -40%;
          animation-duration: 30s;
          animation-delay: -10s;
        }
        
        .wave4 {
          top: -60%;
          left: -60%;
          animation-duration: 35s;
          animation-delay: -15s;
        }
        
        @keyframes wave-animation {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
