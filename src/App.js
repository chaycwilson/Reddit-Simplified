import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Header } from './Components/Header/Header'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
              <Route path="/individualPost" />
              <Route  path="/" />
          </Routes>
            
              
            
            
              
            
          

          
        </main>
      </div>
    </Router>
  );
};

export default App;
