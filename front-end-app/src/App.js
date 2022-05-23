import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <div>Hello</div>
    </div>
  );
}

export default App;
