import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Text, Rectangle } from 'recharts';

// Composant personnalisé pour le curseur (survol) dans le graphique
const CustomCursor = ({points, width}) => {
    const [rectHeight, setRectHeight] = useState(214);

    // Gestion de la hauteur du curseur en fonction de la taille de l'écran
    useEffect(() => {
      function handleResize() {
        setRectHeight(window.innerWidth >= 1280 ? 260 : 214);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Si aucun point n'est disponible, ne rien afficher
    if (!points || points.length === 0) return null;

    // Position horizontale du curseur
    const { x } = points[0]; // position horizontale
    return (
        // Zone rouge foncé au survol
        <Rectangle
            className="h-[214px] xl:h-[260px]"
            fill="#000000"
            opacity={0.09}
            x={x}
            y={0}
            width={width}
            height={rectHeight}
        />
    );
};

function SessionDurationChart({ data }) {
    // Étend les données pour ajouter des points fictifs au début et à la fin
    const extendedSessions = [
        { day: 0, sessionLength: 25 },
        ...data,
        { day: 8, sessionLength: 40 }
    ]

    // Jours de la semaine pour l'axe X
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
        <LineChart
            style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
            responsive
            data={extendedSessions} // Données passées au graphique
            margin={{
                top: 50,
                right: 0,
                left: 0,
                bottom: 15,
            }}
        >

            {/* Titre du graphique */}
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

            {/* Grille cartésienne */}
            <CartesianGrid 
                style={{ width: '100%', height: '100%'}}
                horizontal={false}
                vertical={false}
            />

            {/* Axe X (jours de la semaine) */}
            <XAxis 
                dataKey="day" // Clé des données pour cet axe
                axisLine={false} 
                tickLine={false}
                tickFormatter={(day) => (day >= 1 && day <= 7 ? daysOfWeek[day - 1] : '')} // Affiche uniquement les jours réels
                tickMargin={10}
                tick={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 500, opacity: 0.5 }}
                padding={{ left: -10, right: -10 }}
            />

            <YAxis 
                dataKey="sessionLength" // Clé des données pour cet axe
                hide={true}
            />

            {/* Tooltip pour afficher les détails au survol */}
            <Tooltip 
                itemStyle = {{color: '#000000', fontSize: 7}} // Style du texte
                contentStyle ={{backgroundColor: '#FFFFFF', border: 'none'}} // Style du conteneur
                labelStyle={{display: 'none'}}
                formatter={(value) => {
                    return [`${value} min`]; // Formate la valeur en minutes
                }}
                cursor={<CustomCursor />} // Utilisation du curseur personnalisé
            />

            {/* Dégradé pour la ligne */}
            <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} /> {/* Début du dégradé */}
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} /> {/* Fin du dégradé */}
                </linearGradient>
            </defs>

            {/* Ligne représentant la durée des sessions */}
            <Line 
                type="monotone" 
                dataKey="sessionLength" // Clé des données pour cette ligne
                stroke="url(#lineGradient)" 
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: '#FFFFFF', stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 10 }}
            />
        </LineChart>
    )
}
export default SessionDurationChart