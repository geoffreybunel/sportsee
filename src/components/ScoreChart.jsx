import { RadialBarChart, RadialBar, Text, PolarAngleAxis } from 'recharts';

function ScoreChart({ score }) {
    // Prépare les données pour le RadialBarChart
    const userScoreArray = [
        { name: 'score', value: score, fill: '#FF0000' }, // Segment rouge représentant le score
    ];

    return (
        <div 
            className='relative w-full max-w-[500px] max-h-[260px] my-0 mx-auto'
            style={{
                aspectRatio: '1', // Maintient un carré
            }}
        >
            <RadialBarChart
                style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '260px', aspectRatio: 1 }}
                responsive
                data={userScoreArray} // Données passées au graphique
                innerRadius="60%"
                outerRadius="70%"
                startAngle={90}
                endAngle={450}
            >
                {/* Axe des angles (non visible) */}
                <PolarAngleAxis
                    type="number"
                    domain={[0, 1]}
                    tick={false}
                />

                {/* Cercle blanc comme fond */}
                <g>
                    <circle
                        cx="50%" // Centre horizontal
                        cy="50%" // Centre vertical
                        r="28%" // Rayon proportionnel au conteneur
                        fill="#FFFFFF" // Couleur blanche
                    />
                </g>

                {/* Texte titre du graphique */}
                <Text
                    x={30}
                    y={20}
                    fill='#20253A'
                    fontSize={15}
                    fontWeight={500}
                    textAnchor='start'
                    verticalAnchor='start'
                >
                    Score
                </Text>

                {/* Barre radiale représentant le score */}
                <RadialBar 
                    dataKey="value" 
                    cornerRadius="50%" 
                />
            </RadialBarChart>

            {/* Legend */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center max-w-20 mx-auto max-h-[260px]"
            >
                <span className='text-[#282D30] text-[26px] font-bold'>{`${score * 100}%`}</span>
                <span className='text-[#74798C] text-[16px] font-medium text-center'>de votre objectif</span>
            </div>
        </div>
    )
}
export default ScoreChart