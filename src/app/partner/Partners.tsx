"use client";

import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const initialData = [
  {
    category: "Primary / Junior Secondary Schools",
    value: 80,
    total: 100,
    color: COLORS[0],
    count: 25,
  },
  {
    category: "High Schools",
    value: 60,
    total: 100,
    color: COLORS[1],
    count: 18,
  },
  { category: "Colleges", value: 70, total: 100, color: COLORS[2], count: 12 },
  {
    category: "Universities",
    value: 90,
    total: 100,
    color: COLORS[3],
    count: 10,
  },
];

export default function Partners() {
  const [progress, setProgress] = useState(initialData.map(() => 0));

  // Animate filling of bars
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) => {
          if (val < initialData[i].value) return val + 2;
          return val;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Education Partners
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {initialData.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-40 h-20">
              <PieChart width={160} height={100}>
                <Pie
                  data={[
                    { value: progress[index] },
                    { value: item.total - progress[index] },
                  ]}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  isAnimationActive={false}
                >
                  <Cell fill={item.color} />
                  <Cell fill="#1E293B" />
                </Pie>
              </PieChart>
              <div className="absolute top-10 left-0 w-full text-center font-bold text-xl">
                {item.count}
              </div>
            </div>
            <h2 className="text-lg font-semibold text-center mt-4">
              {item.category}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
