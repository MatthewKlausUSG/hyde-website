import {Link} from "react-router-dom";
import './footer.css';
import LogoImage from '../../global-assets/HYDE-WHITE-PNG.png';
import FooterImage from './FOOTER IMAGE.svg';
import FacebookImage from './FACEBOOK LOGO.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-image">
                <img src={FooterImage} alt="Footer"/>
            </div>
            <div className="footer-block">
                <div className="footer-hyde-info">
                    <img src={LogoImage} alt="Hyde Logo" width='60%' />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to="facebook.com">Facebook</Link>
                    <Link to="instagram.com">Instrgram</Link>
                    <Link to="youtube.com">YouTube</Link>
                </div>
                <div className="footer-links">
                    <h1>Navigation</h1>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/who-we-are'>Who We Are</Link></div>
                    <div><Link to='/resources'>Resources</Link></div>
                    <div><Link to='/'>Refer & Earn</Link></div>
                    <div><Link to='/'>Privacy Policy</Link></div>
                </div>
                <div className="footer-email-notification">
                    <h1>Stay In The Loop</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <input type='email'></input>
                    <button>Join</button>
                </div>
            </div>

        </div>
    );
}
 
export default Footer;


//
//
//