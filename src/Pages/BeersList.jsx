import { Link } from "react-router-dom";     
import Navbar from "../Components/Navbar";


function BeersList(props) {
    const { beers } = props
    console.log(beers)
    return (
        <div>
        <Navbar/>
        <ul >
            {beers.map(beer => (
                <li key={beer._id} className="BeersList">
                    <div>
                        <img
                            src={beer.image_url}
                            alt={beer.name} 
                            style={{"width": "50px"}}
                            />
                    </div>
                    <div>
                        <h2><Link to={`${beer._id}`}>{beer.name}</Link></h2>
                        <h3>{beer.tagline}</h3>
                        <p>{beer.contributed_by}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default BeersList;