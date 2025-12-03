import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

interface RadarChartProps {
  scores: {
    ingredients: number;
    nutrition: number;
    palatability: number;
    priceQuality: number;
    overall: number;
  };
}

export function ArticleRadarChart({ scores }: RadarChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    { subject: "Ingredientes", value: scores.ingredients, fullMark: 5 },
    { subject: "Nutrición", value: scores.nutrition, fullMark: 5 },
    { subject: "Palatabilidad", value: scores.palatability, fullMark: 5 },
    { subject: "Calidad/Precio", value: scores.priceQuality, fullMark: 5 },
    { subject: "Global", value: scores.overall, fullMark: 5 }
  ];

  if (!mounted) {
    return <div className="w-full h-[320px] flex items-center justify-center bg-secondary/30 rounded-lg animate-pulse" />;
  }

  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 5]}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            tickCount={6}
          />
          <Radar
            name="Puntuación"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.4}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
