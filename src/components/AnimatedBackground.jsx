import React from "react";
import "./Lines.css";

export default function AnimatedBackground({ children }) {
  const totalLines = 5;

  return (
    <div className="relative bg-[#163031] ">
      <div className="absolute top-0 left-0 right-0 h-full w-full mx-auto">
        {Array.from({ length: totalLines }).map((_, i) => {
          const position = ((i + 1) * 100) / (totalLines + 1);
          return (
            <div
              key={i}
              className="line"
              style={{ left: `${position}%` }}
            >
              <span className="drop"></span>
              <span className="drop delay1"></span>
              <span className="drop delay2"></span>
            </div>
          );
        })}
      </div>
      {children} {/* Render children (Header, Routes, etc.) */}
    </div>
  );
}