import {Link} from "react-router-dom";
import './header.css';
import LogoImage from '../../global-assets/HYDE-LOGO.png';

const Header = () => {
    return (  
        <div className="header">
            <img src={LogoImage} alt="Hyde Logo"/>
            <Link to="/">Home</Link>
            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/how-we-help">How We Help</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/">$ Refer & Earn</Link>
            <button>
                See If You Qualify
            </button>
        </div>
    );
}
 
export default Header;