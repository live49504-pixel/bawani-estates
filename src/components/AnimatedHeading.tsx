import { useEffect, useState } from "react";

interface Props {
  text: string;
}

const CHAR_DELAY = 30;

export default function AnimatedHeading({ text }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, charIndex) => {
            const delay =
              lineIndex * line.length * CHAR_DELAY +
              charIndex * CHAR_DELAY;

            return (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateX(0)"
                    : "translateX(-18px)",
                  transition: "all 500ms ease",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </>
  );
}