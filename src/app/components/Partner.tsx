"use client";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const categoryColors = [
  { color: "#3B82F6", glow: "rgba(59,130,246,0.5)" },
  { color: "#10B981", glow: "rgba(16,185,129,0.5)" },
  { color: "#F59E0B", glow: "rgba(245,158,11,0.5)" },
  { color: "#EF4444", glow: "rgba(239,68,68,0.5)" },
];

const partnersData = [
  {
    category: "Primary / Junior Secondary Schools",
    value: 80,
    total: 100,
    count: 25,
  },
  { category: "High Schools", value: 60, total: 100, count: 18 },
  { category: "Colleges", value: 70, total: 100, count: 12 },
  { category: "Universities", value: 90, total: 100, count: 10 },
];

export default function Partners() {
  const [progress, setProgress] = useState(partnersData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) => {
          if (val < partnersData[i].value) return val + 2;
          return val;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-24 px-10">
      <h1 className="text-5xl font-extrabold text-center mb-16 tracking-wide text-gray-800">
        Our Education Partners
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
        {partnersData.map((item, index) => {
          const { color, glow } = categoryColors[index % categoryColors.length];
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 flex flex-col items-center shadow-xl hover:scale-105 transition-all duration-500 border border-gray-200"
              style={{
                boxShadow: `0 0 30px ${glow}`,
                minHeight: "400px",
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              <div
                className="relative w-[200px] h-[180px] flex justify-center items-center mt-2"
                style={{
                  filter: `drop-shadow(0 0 25px ${glow})`,
                }}
              >
                <PieChart width={280} height={200}>
                  <Pie
                    data={[
                      { value: progress[index] },
                      { value: item.total - progress[index] },
                    ]}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={90}
                    outerRadius={110}
                    paddingAngle={5}
                    isAnimationActive={false}
                  >
                    <Cell fill={color} />
                    <Cell fill="#E5E7EB" />
                  </Pie>
                </PieChart>

                <div
                  className="absolute top-[90px] left-0 w-full text-center font-bold text-3xl"
                  style={{
                    color,
                    textShadow: `0 0 10px ${glow}`,
                  }}
                >
                  {item.count}
                </div>
              </div>

              <h2
                className="text-xl font-semibold text-center mt-10 transition-all duration-300 text-gray-800"
                style={{
                  textShadow: `0 0 6px ${glow}`,
                }}
              >
                {item.category}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
