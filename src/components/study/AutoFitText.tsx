import { useLayoutEffect, useRef, useState } from "react";

type AutoFitTextProps = {
  children: string;
  className?: string;
  maxFontSize: number;
  minFontSize: number;
  lineHeight?: number;
};

export function AutoFitText({
  children,
  className,
  maxFontSize,
  minFontSize,
  lineHeight = 1.16,
}: AutoFitTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    const element = textRef.current;
    const container = element?.parentElement;

    if (!element || !container) {
      return;
    }

    function fitText() {
      if (!element || !container) {
        return;
      }

      let low = minFontSize;
      let high = maxFontSize;
      let best = minFontSize;

      for (let index = 0; index < 12; index += 1) {
        const middle = (low + high) / 2;
        element.style.fontSize = `${middle}px`;
        element.style.lineHeight = String(lineHeight);

        const fits =
          element.scrollHeight <= container.clientHeight * 0.82 &&
          element.scrollWidth <= container.clientWidth * 0.92;

        if (fits) {
          best = middle;
          low = middle;
        } else {
          high = middle;
        }
      }

      setFontSize(Math.floor(best));
    }

    fitText();

    const resizeObserver = new ResizeObserver(fitText);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [children, lineHeight, maxFontSize, minFontSize]);

  return (
    <h2
      className={className}
      ref={textRef}
      style={{
        fontSize,
        lineHeight,
      }}
    >
      {children}
    </h2>
  );
}
