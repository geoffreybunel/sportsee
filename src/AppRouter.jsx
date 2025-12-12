import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

<BrowserRouter>
  <Routes>
    <Route path="/user/:id" element={<App />} />
  </Routes>
</BrowserRouter>

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Aucun utilisateur sélectionné ou utilisateur inconnu</div>} />
          <Route path="/user/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter