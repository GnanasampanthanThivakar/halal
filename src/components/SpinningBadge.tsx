import React from 'react';

const SpinningBadge: React.FC = () => {
  return (
    <div className="relative w-[140px] h-[140px] animate-spin-slow hover:animate-[spin-slow_10s_linear_infinite] transition-transform hover:scale-110 cursor-pointer hidden md:block">
      <svg viewBox="0 0 140 140" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 70, 70 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
          />
        </defs>
        <text
          fill="#1B4D3E"
          fontSize="11"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.15em"
        >
          <textPath href="#circlePath">
            MAKE FRESH EAT REFRESH MAKE FRESH EAT REFRESH
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full shadow-card flex items-center justify-center">
          <span className="text-accent-red font-inter font-bold text-xs text-center leading-tight">
            ORDER YOUR
            <br />
            BURGER
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpinningBadge;
