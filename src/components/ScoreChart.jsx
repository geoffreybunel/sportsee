// import { Pie, PieChart, Text } from 'recharts';
import { RadialBarChart, RadialBar, Text, PolarAngleAxis } from 'recharts';

function ScoreChart({ score }) {
    // Prépare les données pour le PieChart
    const userScoreArray = [
        { name: 'score', value: score, fill: '#FF0000' },
    ];

    return (
        <div 
            className='relative w-full max-w-[500px] my-0 mx-auto'
            style={{
                aspectRatio: '1', // Maintient un carré
            }}
        >
            <RadialBarChart
                style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '100vh', aspectRatio: 1 }}
                responsive
                data={userScoreArray}
                innerRadius="60%"
                outerRadius="70%"
                startAngle={90}
                endAngle={450}
            >

                <PolarAngleAxis
                    type="number"
                    domain={[0, 1]}
                    tick={false}
                />

                {/* Ajout d'un cercle blanc comme fond */}
                <circle
                    cx="50%"
                    cy="50%"
                    r="29.5%"
                    fill="#FFFFFF"
                />

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

                <RadialBar 
                    dataKey="value" 
                    cornerRadius="50%" 
                />
            </RadialBarChart>

            {/* Legend */}
            <div
                className="absolute max-w-20 flex flex-col items-center justify-center"
                style={{
                    top: '48%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <span className='text-[#282D30] text-[26px] font-bold'>{`${score * 100}%`}</span>
                <span className='text-[#74798C] text-[16px] font-medium text-center'>de votre objectif</span>
            </div>
        </div>
    )
}
export default ScoreChart