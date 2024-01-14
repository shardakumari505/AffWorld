import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

class App extends Component {

  render(){
  
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />            
          </Routes>
        </Router>

    </div>
  );
}
}

export default App;