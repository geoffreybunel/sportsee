import { useState } from 'react';
import data from '../data/data.json';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Text, ReferenceArea } from 'recharts';

function SessionDurationChart() {
    const [activeIndex, setActiveIndex] = useState(null);

    const userId = 12; // ID de l'utilisateur
    const userAverageSessions = data.USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === userId);
    const extendedSessions = [
        { day: 0, sessionLength: 25 },
        ...userAverageSessions.sessions,
        { day: 8, sessionLength: 40 }
    ]

    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
        <LineChart
            style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', aspectRatio: 1.618 }}
            responsive
            data={extendedSessions}
            margin={{
                top: 50,
                right: 0,
                left: 0,
                bottom: 15,
            }}
            onMouseMove={(e) => {
                if (e && e.activeTooltipIndex !== undefined) {
                    setActiveIndex(e.activeTooltipIndex); // Met à jour l'index actif
                }
            }}
            onMouseLeave={() => setActiveIndex(null)} // Réinitialise l'état lorsque la souris quitte le graphique
        >
            <Text
                x={20}
                y={20}
                fill='#FFFFFF'
                fontSize={15}
                fontWeight={500}
                width={150}
                textAnchor='start'
                verticalAnchor='start'
                opacity={0.5}
            >
                Durée moyenne des sessions
            </Text>

            <CartesianGrid 
                style={{ width: '100%', height: '70%'}}
                horizontal={false}
                vertical={false}
            />

            <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tickFormatter={(day) => (day >= 1 && day <= 7 ? daysOfWeek[day - 1] : '')} // Affiche uniquement les jours réels
                tickMargin={10}
                tick={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 500, opacity: 0.5 }}
                padding={{ left: -10, right: -10 }}
            />

            <YAxis 
                dataKey="sessionLength"
                hide={true}
            />

            <Tooltip 
                itemStyle = {{color: '#000000', fontSize: 7}}
                contentStyle ={{backgroundColor: '#FFFFFF', border: 'none'}}
                labelStyle={{display: 'none'}}
                cursor = {false}
                formatter={(value) => {
                    return [`${value} min`];
                }}
                
            />

            <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} /> {/* Début du dégradé */}
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} /> {/* Fin du dégradé */}
                </linearGradient>
            </defs>

            <Line 
                type="monotone" 
                dataKey="sessionLength" 
                stroke="url(#lineGradient)" 
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: '#FFFFFF', stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 10 }}
            />

            {activeIndex !== null && extendedSessions[activeIndex] && (
                <>
                    <ReferenceArea
                        x1={extendedSessions[activeIndex]?.day} // Position du curseur
                        x2={8} // Dernier jour
                        y1={0}
                        y2="auto"
                        fill="rgba(0, 0, 0, 0.0975)" 
                        strokeOpacity={0}
                    />
                </>
            )}
        </LineChart>
    )
}
export default SessionDurationChart