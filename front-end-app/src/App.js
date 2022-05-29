import './App.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Menu from './Menu';
import Home from './Home';

export default function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

