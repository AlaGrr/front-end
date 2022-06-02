import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Home1 from './Home1';
import RestoPlat from './RestoPlat';
import Search from '../src/seachFriends/Search';
import Profile from './profile/Profile';
import Post from './posts/Post';
import Rightbar from './rightbar/Rightbar';
import Share from './share/Share';
import Topbar from './topbar/Topbar';
import Wall from './wall/Wall';
import Register from './register/Register';
import Login from './login/Login';

export default function App() {
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<Register/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/RestoPlat" element={<RestoPlat />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Rightbar" element={<Rightbar />} />
        <Route path="/Share" element={<Share />} />
        <Route path="/Topbar" element={<Topbar />} />
        <Route path="/Wall" element={<Wall />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Post" element={<Post date={new Date()} content="Hi guys" like={1} share={1} username="Ala" photo="photo2.jpg"/>} />
      </Routes>
    </div>
  );
}

