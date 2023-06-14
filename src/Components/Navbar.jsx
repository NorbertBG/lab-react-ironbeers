import { Link } from "react-router-dom";
import home from "../assets/home.png"


function Navbar(props) {

    return (
        <div className="Navbar" style={{ width: "100%", height: "100px", backgroundColor: "cyan" }} >
            <div>
                <Link to="/"> <img src={home} alt="home" style={{ width: "70px" }} /></Link>
            </div>
        </div>
    )
}

export default Navbar;
