import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Main_airport from './pages/main_airport/Main_airport';
import Main from './pages/main/Main';
function App() {
  return (
    <div className="App">
      <div className="core">
        <Navbar/>
        <div className='core2'>
          <div className='subcore1'></div>
           <Routes>
        
           <Route path="/" element={<Main/>} />
           <Route path="/Airport_page" element={<Main_airport/>}/>

           </Routes>

        </div>

      </div>
    </div>
  );
}

export default App;
