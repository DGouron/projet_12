import { RadialBarChart, RadialBar } from "recharts";

function AverageScore({ latestScore }: { latestScore: number }) {
  const data = [
    {
      name: "base",
      value: 1,
      fill: "rgba(0, 0, 0, 0)",
    },
    {
      name: "Score",
      value: latestScore,
      fill: "#FF0000",
    },
  ];
  return (
    <div className="bg-[#FBFBFB] rounded-md relative">
      <div className="absolute top-8 left-8 bg-white rounded-full w-[200px] h-[200px]"></div>
      <RadialBarChart
        innerRadius={0}
        outerRadius={200}
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={360 + 90}
        height={263}
        width={275}
      >
        <text
          x={30}
          y={20}
          textAnchor="left"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "Roboto",
            fill: "##20253A",
          }}
        >
          Score
        </text>
        <text
          x={262 / 2}
          y={258 / 2.5}
          textAnchor="middle"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            fill: "#282D30",
          }}
        >
          {latestScore * 100}%
        </text>
        <text
          x={262 / 2}
          y={258 / 2.5 + 20}
          textAnchor="middle"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            fill: "#74798C",
          }}
        >
          de votre
        </text>
        <text
          x={262 / 2}
          y={258 / 2.5 + 40}
          textAnchor="middle"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Roboto",
            fill: "#74798C",
          }}
        >
          objectif
        </text>
        <RadialBar dataKey="value" cornerRadius={50} />
      </RadialBarChart>
    </div>
  );
}

export default AverageScore;
