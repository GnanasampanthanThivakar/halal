import React from 'react';

interface WavyDividerProps {
  fillColor?: string;
  flip?: boolean;
}

const WavyDivider: React.FC<WavyDividerProps> = ({ fillColor = '#F5F0E6', flip = false }) => {
  return (
    <div
      className="absolute left-0 w-full overflow-hidden leading-none"
      style={{
        bottom: flip ? 'auto' : '-1px',
        top: flip ? '-1px' : 'auto',
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
