import data from './data/data.json'
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
  const user = data.USER_MAIN_DATA.find(user => user.id === userID)

  // Si pas d'id OU id non valide OU user non trouvé
  if (!id || !validIds.includes(userID) || !user) {
    return <div>Aucun utilisateur sélectionné ou utilisateur inconnu</div>;
  }

  return (
    <UserProvider userId={userID}>
      <div className='font-[Roboto] min-w-5xl'>
        <Header />
        <div className='flex min-w-5xl'>
          <Sidebar /> 

          <div className='w-full my-15 mx-[max(24px,min(100px,(100vw-1024px)/2))] flex flex-col gap-15'>
            <div>
              <Hero name={user.userInfos.firstName} />
            </div>

            <div className='flex gap-2 max-h-[600px]'>
              <div className='w-[76%] grid grid-cols-3 gap-2'>
                <div className='bg-[#FBFBFB] col-span-3 flex justify-center items-center h-[270px] xl:h-80 rounded-md'>
                  <DailyActivityChart/>
                </div>

                <div className='bg-[#FF0000] h-full xl:h-65 rounded-md relative'>
                  <SessionDurationChart/>
                </div>

                <div className='bg-[#282D30] h-[214px] xl:h-65 rounded-md'>
                  <PerformanceChart/>
                </div>

                <div className='bg-[#FBFBFB] h-[214px] xl:h-65 rounded-md relative'>
                  <ScoreChart/>
                </div>
              </div>

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
