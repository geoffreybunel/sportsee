import './App.css'
import data from './data/data.json'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import NutrientCard from './components/NutrientCard'
import DailyActivityChart from './components/DailyActivityChart'
import SessionDurationChart from './components/SessionDurationChart'
import PerformanceChart from './components/PerformanceChart'
import ScoreChart from './components/ScoreChart'

function App({id}) {
  const userID = id;
  const user = data.USER_MAIN_DATA.find(user => user.id === userID)

  return (
    <div className='font-[Roboto] min-w-5xl'>
      <Header />
      <div className='flex'>
        <Sidebar /> 

        <div className='w-full my-15 mx-4 flex flex-col gap-15'>
          <div>
            <Hero name={user.userInfos.firstName} />
          </div>

          <div className='flex gap-2 max-h-[600px]'>
            <div className='w-[76%] grid grid-cols-3 gap-2'>
              <div className='bg-[#FBFBFB] col-span-3 flex justify-center items-center h-[270px] rounded-md'>
                <DailyActivityChart id={userID} />
              </div>

              <div className='bg-[#FF0000] max-h-[214px] h-full rounded-md relative'>
                <SessionDurationChart id={userID} />
              </div>

              <div className='bg-[#282D30] h-[214px] rounded-md'>
                <PerformanceChart id={userID} />
              </div>

              <div className='bg-[#FBFBFB] h-[214px] rounded-md relative'>
                <ScoreChart id={userID} />
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
  )
}

export default App
