import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar /> 
      </div>
    </>
  )
}

export default App
