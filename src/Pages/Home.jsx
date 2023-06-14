import { logRoles } from "@testing-library/react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import ramdomBeer from "../assets/random-beer.png"

function Home(props) {

    return (
        <section className="HomePage" >
            <div>
                <Link to="/beers">
                    <img src={beers} alt="beers" />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec eleifend sem. Nulla hendrerit nec nisl ac porttitor. Mauris suscipit ex eget neque consequat pellentesque. Nullam libero risus, rhoncus vel orci et, posuere sagittis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt massa eu semper bibendum.</p>
                </Link>
            </div>
            <div>
                <Link to="beers/random-beer">
                    <img src={ramdomBeer} alt="random beer" />
                    <h2 >Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec eleifend sem. Nulla hendrerit nec nisl ac porttitor. Mauris suscipit ex eget neque consequat pellentesque. Nullam libero risus, rhoncus vel orci et, posuere sagittis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt massa eu semper bibendum.</p>
                </Link>
            </div>
            <div>
                <Link to="beers/new-beer">
                    <img src={newBeer} alt="new beer" />
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec eleifend sem. Nulla hendrerit nec nisl ac porttitor. Mauris suscipit ex eget neque consequat pellentesque. Nullam libero risus, rhoncus vel orci et, posuere sagittis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt massa eu semper bibendum.</p>
                </Link>
            </div>
        </section>
    )
}

export default Home;
