import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  highlightWord: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  highlightWord,
  light = false,
}) => {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <p
          className={`font-bangers text-lg tracking-wider mb-2 ${
            light ? 'text-accent-red' : 'text-accent-red'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-barlow font-bold text-4xl md:text-5xl uppercase ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}{' '}
        <span className={light ? 'text-accent-yellow' : 'text-primary-green'}>
          {highlightWord}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
