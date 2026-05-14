import { useState, useRef, useEffect } from "react";

interface SliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step: number;
}

export function Slider({ value, onChange, min, max, step }: SliderProps) {
  const rangeRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

  const handleMouseDown = (thumb: "min" | "max") => {
    setDragging(thumb);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging || !rangeRef.current) return;

      const rect = rangeRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const newValue = Math.round((percentage / 100) * (max - min) / step) * step + min;

      if (dragging === "min") {
        onChange([Math.min(newValue, value[1]), value[1]]);
      } else {
        onChange([value[0], Math.max(newValue, value[0])]);
      }
    };

    const handleMouseUp = () => {
      setDragging(null);
    };

    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, value, min, max, step, onChange]);

  return (
    <div className="py-4">
      <div ref={rangeRef} className="relative h-2 bg-gray-200 rounded">
        <div
          className="absolute h-full bg-[#111111] rounded"
          style={{
            left: `${getPercentage(value[0])}%`,
            right: `${100 - getPercentage(value[1])}%`,
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#111111] rounded-full cursor-pointer hover:scale-110 transition-transform"
          style={{ left: `${getPercentage(value[0])}%`, marginLeft: "-8px" }}
          onMouseDown={() => handleMouseDown("min")}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#111111] rounded-full cursor-pointer hover:scale-110 transition-transform"
          style={{ left: `${getPercentage(value[1])}%`, marginLeft: "-8px" }}
          onMouseDown={() => handleMouseDown("max")}
        />
      </div>
    </div>
  );
}
