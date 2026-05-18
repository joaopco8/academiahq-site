"use client";

const MATRIX_CHARS =
  "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01001101";

const MATRIX_COLS = Array.from({ length: 48 }, (_, i) => ({
  left: `${((i * 2.1 + 0.5) % 100).toFixed(1)}%`,
  chars: Array.from({ length: 22 }, (_, j) =>
    MATRIX_CHARS[(i * 13 + j * 7 + 3) % MATRIX_CHARS.length]
  ),
  duration: ((i * 7) % 10) + 6,
  delay: -(((i * 11) % 15) + 1),
  opacity: ((i * 19) % 6) * 0.03 + 0.1,
  fontSize: ((i * 11) % 4) + 12,
}));

export default function MatrixRain() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes matrix-fall {
          0%   { transform: translateY(-110%); }
          100% { transform: translateY(110vh); }
        }
      `}} />
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ filter: "blur(0.8px)" }}
      >
        {MATRIX_COLS.map((col, i) => (
          <div
            key={i}
            className="absolute top-0 flex flex-col"
            style={{
              left: col.left,
              opacity: col.opacity,
              animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
              fontFamily: "monospace",
              fontSize: col.fontSize,
              lineHeight: 1.5,
              userSelect: "none",
              letterSpacing: "0",
            }}
          >
            {col.chars.map((char, j) => (
              <span
                key={j}
                style={{
                  color:
                    j === col.chars.length - 1
                      ? "#FFFFFF"
                      : j >= col.chars.length - 3
                      ? "#DCC8FF"
                      : j >= col.chars.length - 8
                      ? "#B087E8"
                      : "#7B4FC4",
                  opacity: Math.max(0.08, 1 - (col.chars.length - 1 - j) * 0.038),
                  textShadow:
                    j === col.chars.length - 1
                      ? "0 0 12px rgba(220,200,255,1), 0 0 24px rgba(180,135,232,.6)"
                      : j >= col.chars.length - 3
                      ? "0 0 6px rgba(176,135,232,.5)"
                      : "none",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
