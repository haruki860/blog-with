import './App.css';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Home from './compornents/Home';
import Logout from './compornents/Logout';
import Login from './compornents/Login';
import CreatePost from './compornents/CreatePost';
import Navbar from './compornents/Navbar';
import { useState } from 'react';



const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
  <Router>
    <Navbar isAuth={ isAuth } />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/login" element={<Login setIsAuth={ setIsAuth } />}></Route>
      <Route path="/logout" element={<Logout setIsAuth={ setIsAuth } />}></Route>

    </Routes>
  </Router>
  );
}

export default App;
