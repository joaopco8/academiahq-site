"use client";

import { useState, useEffect, useCallback } from "react";

interface LetterState {
  char: string;
  isMatrix: boolean;
  isSpace: boolean;
}

interface MatrixTextProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  initialDelay?: number;
  letterAnimationDuration?: number;
  letterInterval?: number;
}

export const MatrixText = ({
  text = "HelloWorld!",
  className,
  style,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
}: MatrixTextProps) => {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === " ",
    }))
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomChar = useCallback(
    () => (Math.random() > 0.5 ? "1" : "0"),
    []
  );

  const animateLetter = useCallback(
    (index: number) => {
      if (index >= text.length) return;
      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev];
          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            };
          }
          return newLetters;
        });
        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev];
            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
            };
            return newLetters;
          });
        }, letterAnimationDuration);
      });
    },
    [getRandomChar, text, letterAnimationDuration]
  );

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    let currentIndex = 0;
    const animate = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false);
        return;
      }
      animateLetter(currentIndex);
      currentIndex++;
      setTimeout(animate, letterInterval);
    };
    animate();
  }, [animateLetter, text, isAnimating, letterInterval]);

  useEffect(() => {
    const timer = setTimeout(startAnimation, initialDelay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className} style={style}>
      {letters.map((letter, index) => (
        <span
          key={index}
          style={
            letter.isMatrix
              ? {
                  color: "#C9A84C",
                  WebkitTextFillColor: "#C9A84C",
                  textShadow:
                    "0 0 12px rgba(220,180,60,1), 0 0 24px rgba(180,140,20,.6)",
                  transition: "color 0.08s, text-shadow 0.08s",
                  fontFamily: "monospace",
                }
              : {
                  background:
                    "linear-gradient(130deg,#C9A84C 0%,#E8C66A 28%,#F0C84A 58%,#C9A84C 100%)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 5s ease infinite",
                  transition: "color 0.15s",
                }
          }
        >
          {letter.isSpace ? "\u00A0" : letter.char}
        </span>
      ))}
    </span>
  );
};
