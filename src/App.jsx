import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import NutrientCard from './components/NutrientCard'

function App() {

  return (
    <div className='font-[Roboto]'>
      <Header />
      <div className='flex'>
        <Sidebar /> 

        <div className='w-full m-20 flex flex-col gap-10'>
          <div>
            <Hero name="Thomas" />
          </div>

          <div className='flex gap-6'>
            <div className='w-[70%] h-full grid grid-cols-3 gap-6'>
              <div className='bg-[#FBFBFB] col-span-3'>1</div>
              <div className='bg-[#FBFBFB]'>2</div>
              <div className='bg-[#FBFBFB]'>3</div>
              <div className='bg-[#FBFBFB]'>4</div>
            </div>

            <div className='w-[30%] flex flex-col gap-6'>
              <NutrientCard
                icon="energy"
                name="Calories"
                color="#FF0000"
                value="1,930kCal" 
              />

              <NutrientCard
                icon="chicken"
                name="Protéines"
                color="#4AB8FF"
                value="155g" 
              />

              <NutrientCard
                icon="apple"
                name="Glucides"
                color="#FDCC0C"
                value="290g" 
              />

              <NutrientCard
                icon="cheeseburger"
                name="Lipides"
                color="#FD5181"
                value="50g" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
