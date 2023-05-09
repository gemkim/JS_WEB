import Header from 'components/Header/Index';
import './App.css';
import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;