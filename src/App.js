import Header from 'components/Header/Index';
import './App.css';
import React from "react";
import { Link, Outlet } from 'react-router-dom';

function App() {
  // const [msg, setMsg] = useState([]);
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => {return res.json();})
  //     .then((data) => {setMsg(data);})
  // }, []);
  return (
    <div className="wrap">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;