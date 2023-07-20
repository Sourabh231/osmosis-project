import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Explore from './components/Explore';
import Create from './components/Create';
import Login from './components/Login';
import SignUp from './components/Signup';
import Events from './components/Events';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/event' element={<Events/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<SignUp/>}/> 
      </Routes>
    </div>
  );
}

export default App;
