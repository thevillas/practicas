import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Layout  from './pages/layout.jsx'
import  Home from './pages/home.jsx'
import  Movies  from './pages/movies.jsx'
import  Series  from './pages/series.jsx'
import { useEffect, useState } from 'react';



function App() {
  
  const [data, setdata] = useState(null);
  
  useEffect(()=>{
    fetch(".sample.json")
  },[])



  return (
    <div>
      <h1></h1>
      <Routes> 
        <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />}/>
        <Route path="Movies" element={<Movies />}/>
        <Route path="Series" element={<Series />}/>
        <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
