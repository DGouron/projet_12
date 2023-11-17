import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { UserPerformance } from "../../../schema/userSchema";
import useFormatPerformance from "../../../hooks/useFormatPerformance";

function Performance({
  userPerformance,
}: {
  userPerformance: UserPerformance | undefined;
}) {
  const formattedData = useFormatPerformance(userPerformance);

  return (
    <div className="bg-[#282D30] rounded-md relative">
      <RadarChart
        data={formattedData}
        outerRadius="70%"
        height={263}
        width={275}
      >
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

export default Performance;
