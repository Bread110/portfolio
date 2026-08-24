import { useEffect, useRef, useState } from "react";

const DEFAULT_LINES = ["> full-stack developer", "> building things for fun"];

export default function ProfileTerminal({
  command = "$ whoami",
  lines = DEFAULT_LINES,
  loop = true,
  loopDelay = 6000,
}) {
  const [typedCommand, setTypedCommand] = useState("");
  const [typedLines, setTypedLines] = useState(lines.map(() => ""));
  const [showCursor, setShowCursor] = useState(true);
  const timeouts = useRef([]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const typeInto = (text, setter, speed, onDone) => {
    let i = 0;
    const step = () => {
      setter(text.slice(0, i + 1));
      i++;
      if (i < text.length) {
        timeouts.current.push(setTimeout(step, speed));
      } else if (onDone) {
        onDone();
      }
    };
    step();
  };

  const runSequence = () => {
    setTypedCommand("");
    setTypedLines(lines.map(() => ""));

    typeInto(command, setTypedCommand, 90, () => {
      timeouts.current.push(
        setTimeout(() => {
          const typeLineAt = (idx) => {
            if (idx >= lines.length) return;
            typeInto(
              lines[idx],
              (val) =>
                setTypedLines((prev) => {
                  const next = [...prev];
                  next[idx] = val;
                  return next;
                }),
              40,
              () =>
                timeouts.current.push(
                  setTimeout(() => typeLineAt(idx + 1), 200),
                ),
            );
          };
          typeLineAt(0);
        }, 300),
      );
    });
  };

  useEffect(() => {
    const kickoff = setTimeout(runSequence, 0);

    let loopId;
    if (loop) {
      loopId = setInterval(runSequence, loopDelay);
    }
    const blinkId = setInterval(() => setShowCursor((v) => !v), 500);

    return () => {
      clearTimeout(kickoff);
      clearTimers();
      clearInterval(loopId);
      clearInterval(blinkId);
    };
  }, []);

  return (
    <div className="w-full bg-[#04070ea2] rounded-lg overflow-hidden border border-[#30363d] font-mono">
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#161b22] border-b border-[#30363d]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-[#8b949e]">dev@portfolio: ~</span>
      </div>

      <div className="px-4 py-4 text-[13px] leading-relaxed text-[#c9d1d9] min-h-[150px]">
        <div>
          <span className="text-[#7ee787]">$</span> {typedCommand}
        </div>

        {typedLines.map((line, i) => (
          <div key={i} className="mt-1">
            {line}
          </div>
        ))}

        <div className="mt-2">
          <span className="text-[#7ee787]">$</span>{" "}
          <span
            className="inline-block w-2 h-[15px] bg-[#c9d1d9] align-middle"
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        </div>
      </div>
    </div>
  );
}
