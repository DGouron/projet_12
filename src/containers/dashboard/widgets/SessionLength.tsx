import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

function SessionLength() {
  const data = [
    {
      value: 80,
      kind: "Intensité",
    },
    {
      value: 120,
      kind: "Vitesse",
    },
    {
      value: 140,
      kind: "Force",
    },
    {
      value: 50,
      kind: "Endurance",
    },
    {
      value: 200,
      kind: "Energie",
    },
    {
      value: 90,
      kind: "Cardio",
    },
  ];
  return (
    <div className="bg-[#FF0000] rounded-md relative">
      <RadarChart data={data} outerRadius="70%" height={263} width={275}>
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: "12px", fontWeight: "500" }}
          stroke="#FFFFFF"
        />
        <PolarGrid radialLines={false} stroke="#FFFFFF" gridType="polygon" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity="70%" />
      </RadarChart>
    </div>
  );
}

export default SessionLength;
