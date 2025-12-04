import data from '../data/data.json';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { BarChart, Bar, Text, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DailyActivityChart() {
    const userId = useContext(UserContext);
    const userActivity = data.USER_ACTIVITY.find(activity => activity.userId === userId);

    return (
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '220px', aspectRatio: 1.618 }}
            responsive
            data={userActivity.sessions}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
            barGap={8}
            className='mx-5'
        >
            <Text
                fill='#20253A'
                fontSize={15}
                fontWeight={500}
                textAnchor='start'
                verticalAnchor='start'
            
            >Activité quotidienne</Text>
            <CartesianGrid strokeDasharray="3 3" vertical={false} width="auto" />
            <XAxis 
                dataKey={(entry) => new Date(entry.day).getDate()} 
                tickLine={false} 
                tickMargin={15}
                padding={{ left: -33, right: -34 }} 
                // scale='point' 
            />
            <YAxis 
                yAxisId="kilogram"
                dataKey="kilogram" 
                orientation="right" 
                tickMargin={30}
                tickCount={3}
                domain={['dataMin - 1', 'dataMax + 1']}
                axisLine={false} 
                tickLine={false}
            />
            <YAxis 
                yAxisId="calories"
                dataKey="calories" 
                tickCount={3}
                hide={true}
            />
            <Tooltip 
                separator = ''
                itemStyle = {{color: '#FFFFFF', fontSize: 7}}
                contentStyle ={{backgroundColor: '#E60000', border: 'none'}}
                labelStyle={{display: 'none'}}
                // formatter={(value, name) => {
                //     if (name === 'kilogram') {
                //         return [`${value}kg`];
                //     }
                //     if (name === 'calories') {
                //         return [`${value}kCal`];
                //     }
                //     return [value, name];
                // }}
                content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                        return (
                            <div style={{ backgroundColor: '#E60000', padding: '10px', color: '#FFFFFF' }}>
                                {payload.map((item, index) => (
                                    <p key={index} style={{ marginTop: 2, marginBottom: 2, fontSize: 7 }}>
                                        {item.name === 'calories'
                                            ? `${item.value}kCal`
                                            : `${item.value}kg`}
                                    </p>
                                ))}
                            </div>
                        );
                    }
                    return null;
                }}
            />
            <Legend
                className='top-0'
                verticalAlign="top"  
                align='right'
                iconType='circle'
                iconSize={10}
                content={() => (
                    <ul className='-mt-2 mb-6 list-none flex justify-end gap-8'>
                        <li className='flex items-center'>
                            <span className='inline-block w-2.5 h-2.5 bg-[#282D30] rounded-[50%] mr-[5px]'></span>
                            <span className='text-sm text-[#74798C]'>Poids (kg)</span>
                        </li>
                        <li className='flex items-center'>
                            <span className='inline-block w-2.5 h-2.5 bg-[#E60000] rounded-[50%] mr-[5px]'></span>
                            <span className='text-sm text-[#74798C]'>Calories brûlées (kCal)</span>
                        </li>
                    </ul>
                )}
            />
            <Bar 
                dataKey="kilogram" 
                yAxisId="kilogram" 
                fill="#282D30" 
                barSize="7" 
                radius={[10, 10, 0, 0]}
            />
            <Bar 
                dataKey="calories" 
                fill="#E60000" 
                barSize="7" 
                radius={[10, 10, 0, 0]} 
            />
        </BarChart>
    )
}
export default DailyActivityChart