import { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
  const data = [
    { subject: 'Ingredientes', value: scores.ingredients, fullMark: 5 },
    { subject: 'Nutrición', value: scores.nutrition, fullMark: 5 },
    { subject: 'Palatabilidad', value: scores.palatability, fullMark: 5 },
    { subject: 'Calidad/Precio', value: scores.priceQuality, fullMark: 5 },
    { subject: 'Global', value: scores.overall, fullMark: 5 },
  ];

  // ÚNICA LÓGICA NUEVA: forzar a Recharts a recalcular el tamaño al montarse
  useEffect(() => {
    const triggerResize = () => {
      window.dispatchEvent(new Event('resize'));
    };

    // pequeño delay para asegurarnos de que el layout ya está pintado
    const timeoutId = setTimeout(triggerResize, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full min-h-[300px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid 
            stroke="hsl(var(--border))"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis 
            dataKey="subject"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <PolarRadiusAxis 
            angle={90}
            domain={[0, 5]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
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
