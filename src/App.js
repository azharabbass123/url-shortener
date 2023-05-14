import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import History from './Components/History';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
         <Route index element={<HomePage />} />
         <Route path='/history' element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
