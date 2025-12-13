import { useEffect, useState } from 'react';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from './services/userService';
import { UserProvider } from './utils/UserProvider'
import { useParams } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import NutrientCard from './components/NutrientCard'
import DailyActivityChart from './components/DailyActivityChart'
import SessionDurationChart from './components/SessionDurationChart'
import PerformanceChart from './components/PerformanceChart'
import ScoreChart from './components/ScoreChart'

function App() {
  const { id } = useParams(); // récupère l'id depuis l'URL
  const userID = Number(id);
  const validIds = [12, 18];

  // États pour stocker les données utilisateur et l'état de chargement
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effet pour récupérer les données utilisateur lorsque l'ID change
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      // Appels API ou fallback mock
      const userData = await getUser(userID);
      const userActivity = await getUserActivity(userID);
      const userAverageSessions = await getUserAverageSessions(userID);
      const userPerformance = await getUserPerformance(userID);
      // console.log('Données de performance récupérées :', userPerformance);

      // Mise à jour des états avec les données récupérées
      setUser(userData);
      setActivity(userActivity);
      setAverageSessions(userAverageSessions);
      setPerformance(userPerformance);

      setLoading(false);
    }

    fetchData(); // Appelle la fonction pour récupérer les données
  }, [userID]); // Dépendance sur l'ID utilisateur

  // Si aucun ID n'est fourni ou si l'ID n'est pas valide
  if (!id || !validIds.includes(userID)) {
    return <div>Aucun utilisateur sélectionné ou utilisateur inconnu</div>;
  }

  // Affiche un message de chargement pendant la récupération des données
  if (loading) {
    return <div>Chargement des données...</div>;
  }

  // Vérifie si `user` est défini avant de l'utiliser
  if (!user) {
    return <div>Les données utilisateur sont introuvables.</div>;
  }

  return (
    // Fournit l'ID utilisateur au contexte UserProvider
    <UserProvider userId={userID}>
      <div className='font-[Roboto] min-w-5xl min-h-195'>
        <Header />

        <div className='flex'>
          <Sidebar /> 

          {/* Contenu principal */}
          <div className='w-full my-[max(26px,min(100px,(100vw-1024px)/2))] mx-[max(24px,min(100px,(100vw-1024px)/2))] flex flex-col gap-15'>
            <div>
              <Hero name={user.userInfos.firstName} />
            </div>

            {/* Section des graphiques */}
            <div className='flex gap-2 max-h-[600px]'>
              <div className='w-[76%] grid grid-cols-3 gap-2'>
                {/* Graphique d'activité quotidienne */}
                <div className='bg-[#FBFBFB] col-span-3 flex justify-center items-center h-[270px] xl:h-80 rounded-md'>
                  <DailyActivityChart data={activity}/>
                </div>
                
                {/* Graphique de durée moyenne des sessions */}
                <div className='bg-[#FF0000] h-full xl:h-65 rounded-md relative'>
                  <SessionDurationChart data={averageSessions}/>
                </div>

                {/* Graphique de performance */}
                <div className='bg-[#282D30] h-[214px] xl:h-65 rounded-md'>
                  <PerformanceChart data={performance}/>
                </div>

                {/* Graphique de score */}
                <div className='bg-[#FBFBFB] h-[214px] xl:h-65 rounded-md relative'>
                  <ScoreChart score={user.score}/>
                </div>
              </div>

              {/* Section des cartes de nutriments */}
              <div className='w-[24%] h-full flex flex-col gap-2'>
                <NutrientCard
                  icon="energy"
                  name="Calories"
                  color="#FF0000"
                  value={user.keyData.calorieCount} 
                  unit="kCal"
                />

                <NutrientCard
                  icon="chicken"
                  name="Protéines"
                  color="#4AB8FF"
                  value={user.keyData.proteinCount} 
                  unit="g"
                />

                <NutrientCard
                  icon="apple"
                  name="Glucides"
                  color="#FDCC0C"
                  value={user.keyData.carbohydrateCount} 
                  unit="g"
                />

                <NutrientCard
                  icon="cheeseburger"
                  name="Lipides"
                  color="#FD5181"
                  value={user.keyData.lipidCount} 
                  unit="g"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  )
}

export default App
