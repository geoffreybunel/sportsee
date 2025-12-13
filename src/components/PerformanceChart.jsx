import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function PerformanceChart({ data }) {
    // console.log('Données reçues par PerformanceChart :', data);
    
    // Vérifie si les données sont valides
    if (!data || (!Array.isArray(data) && (!data.data || !data.kind))) {
        return <div>Les données de performance sont introuvables.</div>;
    }

    // Traduction des types de performance (API ou mock)
    const kindTranslation = {
        1: "Cardio", // Traduction pour les données provenant de l'API
        2: "Énergie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
        cardio: "Cardio", // Traduction pour les données provenant du mock
        energy: "Énergie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité"
    };
    
    // Transforme les données pour le RadarChart
    let performanceData;
    if (data.kind) {
        // Cas où les données viennent de l'API
        performanceData = data.data.map(d => ({
            subject: kindTranslation[data.kind[d.kind]] || `Type ${d.kind}`,
            value: d.value,
        }));
    } else {
        // Cas où les données viennent du mock
        performanceData = data.map(d => ({
            subject: kindTranslation[d.kind] || `Type ${d.kind}`,
            value: d.value,
        }));
    }

    // Ordre souhaité des types de performance
    const desiredOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
    const orderedPerformanceData = performanceData.sort(
        (a, b) => desiredOrder.indexOf(a.subject) - desiredOrder.indexOf(b.subject)
    );

    return (
        <RadarChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
            outerRadius="80%"
            data={orderedPerformanceData} // Données triées passées au graphique
            margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
            }}
        >
            {/* Grille / fond du graphique */}
            <PolarGrid 
                gridType='polygon' 
                polarRadius={[0, 5, 15, 30, 50, 70]} // rayons des cercles concentriques
                radialLines={false}
            />

            {/* Axe des angles (types de performance) */}
            <PolarAngleAxis 
                dataKey="subject" 
                tick={{
                    fill: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: 500,
                }}
            />

            {/* Axe des rayons (valeurs des performances) */}
            <PolarRadiusAxis 
                tick={false} 
                axisLine={false}
            />

            {/* Zone radar */}
            <Radar 
                dataKey="value" 
                fill="#FF0101" 
                fillOpacity={0.7} 
                activeDot={false} // Désactive les points interactifs
            />
        </RadarChart>
    )
}
export default PerformanceChart