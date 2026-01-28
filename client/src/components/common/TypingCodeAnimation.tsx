import { useEffect, useState } from 'react';

interface TypingCodeAnimationProps {
  code: string;
  className?: string;
  containerClassName?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  caretBlinkSpeed?: number;
}

const TypingCodeAnimation = ({
  code,
  className = '',
  containerClassName = '',
  typingSpeed = 50,
  pauseDuration = 2000,
  caretBlinkSpeed = 500,
}: TypingCodeAnimationProps) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let index = 0;
    let isTyping = true;

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < code.length) {
          setDisplayedCode(code.substring(0, index + 1));
          index++;
        } else {
          isTyping = false;
          setTimeout(() => {
            index = 0;
            setDisplayedCode('');
            isTyping = true;
          }, pauseDuration);
        }
      }
    }, typingSpeed);

    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, caretBlinkSpeed);

    return () => {
      clearInterval(typeInterval);
      clearInterval(caretInterval);
    };
  }, [code, typingSpeed, pauseDuration, caretBlinkSpeed]);

  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-lg overflow-y-auto ${containerClassName}`}
    >
      <pre className={`font-mono text-sm text-neutral-950 m-0 ${className}`}>
        <code>{displayedCode}</code>
        <span
          className={`inline-block w-[2px] h-4 bg-neutral-950 ${showCaret ? 'opacity-100' : 'opacity-0'}`}
        ></span>
      </pre>
    </div>
  );
};

export default TypingCodeAnimation;
