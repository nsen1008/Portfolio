import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

const Word: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight: boolean;
}> = ({ word, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="inline-block mr-[0.28em] relative">
      <motion.span
        style={{ opacity }}
        className={isHighlight ? "font-semibold text-black" : "text-[#111111]"}
      >
        {word}
      </motion.span>
    </span>
  );
};

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  highlightWords = [],
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap leading-relaxed ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const cleanWord = word.replace(/[^a-zA-Z0-9À-ỹ]/g, '');
        const isHighlight = highlightWords.some((hw) =>
          cleanWord.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={isHighlight}
          />
        );
      })}
    </p>
  );
};
