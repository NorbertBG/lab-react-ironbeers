import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';

function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar/>
    <div className='DetailsPage'>
      <img src={beers.image_url} alt={beers.name} style={{ width: "100px" }} />
      <div className='components'>
      <div className='componentLeft'>
        <h2>{beers.name}</h2>
        <h3>{beers.tagline}</h3>
      </div>
      <div className='componentRight'>
        <h2>{beers.attenuation_level}</h2>
        <h3>{beers.first_brewed}</h3>
      </div>
      </div>
      <p>{beers.description}</p>
      <p>{beers.contributed_by}</p>
    </div>
    </div>
  );
}

export default RandomBeer;
