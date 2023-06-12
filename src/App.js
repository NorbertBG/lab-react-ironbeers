
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Routes, Route } from "react-router-dom";  
import BeersList from './Pages/BeersList';
import Home from './Pages/Home';
import BeersDetails from './Pages/BeersDetails';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        console.log(response.data)
        setBeers(response.data);
      })

  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/beers/:beersId" element={<BeersDetails beers={beers} />} />
      </Routes>

    </div>
  );
}

export default App;
