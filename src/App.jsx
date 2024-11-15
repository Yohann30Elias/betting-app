import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Wetten from "./pages/Wetten";
import Login from "./pages/Login";

function App() {
  return (
    <div className='mainApp'>

      <BrowserRouter>
        <div className='navabar'>
            <ul>
              <li><Link to="/">Wetten</Link> </li>
              <li><Link to="login">Login</Link></li>
            </ul>
        </div>

        <Routes>
          <Route path="/" element={<Wetten />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
