import data from '../data/data.json';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { Pie, PieChart, Text, Legend } from 'recharts';

function ScoreChart() {
    const userId = useContext(UserContext);
    const user = data.USER_MAIN_DATA.find(u => u.id === userId);

    // Récupère le score
    const userScore = user.todayScore ?? user.score;

    // Prépare les données pour le PieChart
    const userScoreArray = [
        { name: 'score', value: userScore, fill: '#FF0000' },
        { name: 'rest', value: 1 - userScore, fill: '#FBFBFB' },
    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <circle
                cx="50%"
                cy="50%"
                r="30%"
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

            <Pie
                data={userScoreArray}
                innerRadius="60%"
                outerRadius="70%"
                cornerRadius="50%"
                startAngle={90}
                endAngle={450}
                stroke='none'
            />

            <Legend
                content={() => (
                    <div className='absolute max-w-20 flex flex-col items-center -top-38 left-17'>
                        <span className='text-[#282D30] text-[26px] font-bold'>{`${userScore * 100}%`}</span>
                        <span className='text-[#74798C] text-[16px] font-medium text-center'>de votre objectif</span>
                    </div>
                )}
            />
        </PieChart>
    )
}
export default ScoreChart