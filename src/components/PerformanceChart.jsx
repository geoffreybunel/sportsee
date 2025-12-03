import data from '../data/data.json';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

function PerformanceChart() {
    const userId = 12; // ID de l'utilisateur
    const userPerformance = data.USER_PERFORMANCE.find(performance => performance.userId === userId);

    // Transforme l'objet en tableau exploitable par RadarChart
    const kind = userPerformance?.kind || {};
    const performanceData = (userPerformance?.data || []).map(d => ({
        subject: kind[String(d.kind)], // "1" -> "cardio", etc.
        value: d.value,
    }));

    return (
        <RadarChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
            outerRadius="80%"
            data={performanceData}
            margin={{
                top: 17,
                left: 17,
                right: 17,
                bottom: 17,
            }}
        >
            <PolarGrid 
                gridType='polygon' 
                polarRadius={[0, 5, 15, 30, 50, 70]} 
                radialLines={false}
            />
            <PolarAngleAxis 
                dataKey="subject" 
                tick={{
                    fill: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 500,
                }}
            />
            <PolarRadiusAxis 
                tick={false} 
                axisLine={false}
            />
            <Radar 
                dataKey="value" 
                fill="#FF0101" 
                fillOpacity={0.7} 
                activeDot={false}
            />

        </RadarChart>
    )
}
export default PerformanceChart