import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BeersDetails() {
  const [beers, setBeers] = useState([]);
  const { beersId } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${beersId}`)
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      });
  }, []);

  const foundBeer = beers.find((oneBeer) => oneBeer.id === Number(beersId));

  if (!foundBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='DetailsPage'>
      <img src={foundBeer.image_url} alt={foundBeer.name} style={{ width: "100px" }} />
      <div className='components'>
      <div className='componentLeft'>
        <h2>{foundBeer.name}</h2>
        <h3>{foundBeer.tagline}</h3>
      </div>
      <div className='componentRight'>
        <h2>{foundBeer.attenuation_level}</h2>
        <h3>{foundBeer.first_brewed}</h3>
      </div>
      </div>
      <p>{foundBeer.description}</p>
      <p>{foundBeer.contributed_by}</p>
    </div>
  );
}

export default BeersDetails;
