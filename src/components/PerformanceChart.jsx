import data from '../data/data.json';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

function PerformanceChart() {
    const userId = useContext(UserContext);
    const userPerformance = data.USER_PERFORMANCE.find(p => p.userId === userId);

    // Transforme l'objet en tableau exploitable par RadarChart
    const kind = userPerformance.kind;
    const kindTranslation = {
        intensity: "Intensité",
        speed: "Vitesse",
        strength: "Force",
        endurance: "Endurance",
        energy: "Énergie",
        cardio: "Cardio"
    };

    const performanceData = userPerformance.data.map(d => {
        const subjectEn = kind[String(d.kind)];
        return {
          subject: kindTranslation[subjectEn] || subjectEn, // traduit ou garde l'original
          value: d.value,
        };
      });
    const desiredOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
    const orderedPerformanceData = performanceData.sort(
        (a, b) => desiredOrder.indexOf(a.subject) - desiredOrder.indexOf(b.subject)
    );

    return (
        <RadarChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
            outerRadius="80%"
            data={orderedPerformanceData}
            margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
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
                    fontSize: 11,
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