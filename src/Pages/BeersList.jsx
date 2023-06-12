import { Link } from "react-router-dom";     // <== IMPORT


function BeersList(props) {
    const { beers } = props
    console.log(beers)
    return (
        <ul >
            {beers.map(beer => (
                <li key={beer.id} className="BeersList">
                    <div>
                        <img
                            src={beer.image_url}
                            alt={beer.name} 
                            style={{"width": "50px"}}
                            />
                    </div>
                    <div>
                        <h2><Link to={`${beer.id}`}>{beer.name}</Link></h2>
                        <h3>{beer.tagline}</h3>
                        <p>{beer.contributed_by}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default BeersList;