import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Main_airport from './pages/main_airport/Main_airport';
import Main from './pages/main/Main';
import Know_more from './pages/now_more/Know_more';
import Login from './pages/login/Login';
function App() {
  
  return (
    <div className="App">
      <div className="core">
        <Navbar />
        <div className='core2'>
          <div className='subcore1'></div>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/Airport_page" element={<Main_airport/>}/>
            <Route path="/konw_more" element={<Know_more/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>

        </div>

      </div>
    </div>
  );
}

export default App;
