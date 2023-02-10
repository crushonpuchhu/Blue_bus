import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Main_airport from './pages/main_airport/Main_airport';
import Main from './pages/main/Main';
import Know_more from './pages/now_more/Know_more';
import Login from './pages/login/Login';
import { useState } from 'react';
function App() {

   const [profile,set_profile]=useState(null);
   
   

  return (
    <div className="App">
      <div className="core">
        <Navbar p={profile} setp={set_profile} />
        <div className='core2'>
          <div className='subcore1'></div>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/Airport_page" element={<Main_airport/>}/>
            <Route path="/konw_more" element={<Know_more/>}/>
            <Route path="/login" element={<Login profile1={set_profile} />}/>

          </Routes>

        </div>

      </div>
    </div>
  );
}

export default App;
