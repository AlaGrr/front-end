import './App.css';
import Login from './login/Login';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Home1 from './Home1';
import RestoPlat from './RestoPlat';
import Search from '../src/seachFriends/Search';
import Profile from './profile/Profile';

export default function App() {
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/RestoPlat" element={<RestoPlat />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

