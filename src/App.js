import './App.css';
import React, {useState, useEffect} from "react";
import { Link, Route, Routes } from 'react-router-dom';

//components
import User from 'components/User';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

function App() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {return res.json();})
      .then((data) => {setMsg(data);})
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul>
      </header>
      <ul>
        <li><Link to="/" >home</Link></li>
        <li><Link to="/login" >login</Link></li>
      </ul>
     
      <Routes>
        <Route path="/" exact={true} element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;