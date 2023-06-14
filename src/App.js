
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Routes, Route } from "react-router-dom";  
import BeersList from './Pages/BeersList';
import Home from './Pages/Home';
import BeersDetails from './Pages/BeersDetails';
import RandomBeer from './Pages/Random-beer';
import NewBeer from './Pages/New-beer';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data)
        setBeers(response.data);
      })

  }, []);


  const onFormSubmit = (name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by) => {
    const updatedBeers = [...beers];
    updatedBeers.push({
      name:name,
      tagline:tagline,
      description:description,
      first_brewed:first_brewed,
      brewers_tips:brewers_tips,
      attenuation_level:attenuation_level,
      contributed_by:contributed_by
    });
    setBeers(updatedBeers)
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/beers/:beersId" element={<BeersDetails beers={beers} />} />
        <Route path="/beers/random-beer" element={<RandomBeer beers={beers} />} />
        <Route path="/beers/new-beer" element={<NewBeer onChange={onFormSubmit} />} />
      </Routes>

    </div>
  );
}

export default App;
