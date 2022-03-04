//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import React from 'react'
import Home from './components/Home';
import DisplayContacts from './components/DisplayContacts';

function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route path ="/" exact element={<LandingPage/>}></Route>
          <Route path="/SignUp" exact element={<SignUp/>}></Route>
          <Route path="/Home" exact element={<Home/>}></Route>
          <Route path="/DisplayContacts" exact element={<DisplayContacts/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
