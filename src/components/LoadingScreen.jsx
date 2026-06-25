import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Deslog/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a1a] text-white flex flex-col items-center justify-center transition-all duration-700 overflow-hidden">
      
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full top-0 right-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full bottom-0 left-0"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Neomorphic Container Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-12 rounded-3xl
        bg-[#1a1a1a]
        shadow-[20px_20px_50px_#0f0f0f,-20px_-20px_50px_#252525]
        hover:shadow-[15px_15px_35px_#0f0f0f,-15px_-15px_35px_#252525]
        transition-all duration-500">
        
        {/* Neomorphic Top Highlight */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full"></div>
        
        {/* Neomorphic Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

        {/* Decorative Neomorphic Orbs */}
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#1a1a1a] shadow-[4px_4px_10px_#0f0f0f,-4px_-4px_10px_#252525]"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#1a1a1a] shadow-[4px_4px_10px_#0f0f0f,-4px_-4px_10px_#252525]"></div>
        <div className="absolute -top-4 -left-4 w-5 h-5 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>
        <div className="absolute -bottom-4 -right-4 w-5 h-5 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>

        {/* Typing Title with Neomorphic Effect */}
        <div className="relative mb-8 px-6 py-4 rounded-xl
          bg-[#1a1a1a]
          shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]">
          
          <div className="text-4xl md:text-5xl font-mono font-bold flex items-center gap-1">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse text-red-500 font-bold">|</span>
          </div>
          
          {/* Neomorphic Inner Glow on Text */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Neomorphic Progress Bar Container */}
        <div className="relative w-72 h-3 rounded-full
          bg-[#1a1a1a]
          shadow-[inset_4px_4px_10px_#0f0f0f,inset_-4px_-4px_10px_#252525]
          overflow-hidden">
          
          {/* Progress Bar with Neomorphic Glow */}
          <div className="absolute h-full w-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-400 animate-loading-bar rounded-full
            shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          </div>
          
          {/* Neomorphic Progress Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 animate-pulse"></div>
        </div>

        {/* Loading Text with Neomorphic Effect */}
        <div className="mt-6 px-4 py-2 rounded-full text-xs font-medium text-gray-400 tracking-widest uppercase
          bg-[#1a1a1a]
          shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]
          animate-pulse">
          Loading...
        </div>

        {/* Decorative Neomorphic Dots */}
        <div className="absolute bottom-8 flex gap-3">
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525] animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Tailwind CSS Keyframes */}
      <style>
        {`
          @keyframes loading-bar {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }

          .animate-loading-bar {
            animation: loading-bar 2.5s ease-in-out forwards;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          .animate-pulse {
            animation: pulse 1.5s ease-in-out infinite;
          }

          /* Neomorphic Base */
          .neu-base {
            background: #1a1a1a;
            border-radius: 1rem;
          }
          
          /* Neomorphic Extruded */
          .neu-extruded {
            box-shadow: 20px 20px 50px #0f0f0f, -20px -20px 50px #252525;
          }
          
          /* Neomorphic Inset */
          .neu-inset {
            box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
          }

          /* Smooth Transitions */
          * {
            transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};