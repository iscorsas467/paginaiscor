"use client";
import { useEffect, useState } from "react";
import { Trophy, Users, GraduationCap, Star } from "lucide-react";

function useCountUp(target: number, duration = 1000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return val;
}

const items = [
  { icon: Trophy, value: 18, suffix: "+", label: "Años de Experiencia" },
  { icon: Users, value: 500, suffix: "+", label: "Empresas Atendidas" },
  { icon: GraduationCap, value: 15000, suffix: "+", label: "Personas Capacitadas" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfacción del Cliente" },
];

export default function KPIGroup() {
  return (
    <section className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((it, i) => {
            const n = useCountUp(it.value);
            const Icon = it.icon;
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {n.toLocaleString()}{it.suffix}
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium">{it.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
