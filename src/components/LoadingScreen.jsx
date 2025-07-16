import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Deslog/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      ++index;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center transition-all duration-700">
      {/* Typing Title */}
      <div className="text-4xl md:text-5xl font-mono font-bold mb-6 flex items-center">
        {text}
        <span className="ml-1 animate-pulse text-red-500">|</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-2 rounded-full bg-white/10 overflow-hidden relative">
        <div className="absolute h-full w-full bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-progress-glow" />
      </div>
    </div>
  );
};
