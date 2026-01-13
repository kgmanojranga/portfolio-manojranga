import { useEffect, useState } from 'react';

interface TypingCodeProps {
  code: string;
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingCode = ({
  code,
  typingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}: TypingCodeProps) => {
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
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(caretInterval);
    };
  }, [code, typingSpeed, pauseDuration]);

  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg w-[500px] h-[400px] overflow-y-auto ${className}`}>
      <pre className="font-mono text-sm text-neutral-950 m-0">
        <code>{displayedCode}</code>
        <span
          className={`inline-block w-[2px] h-4 bg-neutral-950 ${
            showCaret ? 'opacity-100' : 'opacity-0'
          }`}
        ></span>
      </pre>
    </div>
  );
};

export default TypingCode;
