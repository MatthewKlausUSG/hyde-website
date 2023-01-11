import { Link } from "react-router-dom";
import './homepage.css'
import BlimpImage from '../../global-assets/BLIMP.png';
import AffiliatesResourcesImage from './AFFILIATE RESOURCES CARD IMAGE.svg';
import AffiliatesOwnersImage from './AFFILIATES CARD IMAGE.svg';
import BusinessResourcesImage from './BUSINESS RESOURCES CARD IMAGE.svg';
import BusinessOwnersImage from './BUSINESS OWNERS CARD IMAGE.svg';
import HowItWorksImage from './HOW IT WORKS SECTION IMAGE.svg';
import HeroImage from './HOMEPAGE HERO.svg';
import CheckImage from './CHECK IMAGE.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="refund-panel">
                <div className="refund-left">
                    <h1>We'll Help You Get The</h1>
                    <h2>Refund You Deserve</h2>
                    <p>We make it as easy as possible for business owners to claim tax credits that they qualify for.</p>
                    <Link to='/full-qualify-process'>
                        <button className="purple-button">SEE IF YOU QUALIFY</button>
                    </Link>
                    <div className="check-values">
                        <img src={CheckImage} alt="Check Image" />
                        <h3>speed</h3>
                        <img src={CheckImage} alt="Check Image" />
                        <h3>trust</h3>
                        <img src={CheckImage} alt="Check Image" />
                        <h3>integrity</h3>
                    </div>
                </div>
                <div className="refund-right">
                    <img src={BlimpImage} alt="Blimp" />
                    <h2>$1,234,567,890 has been refunded by the ERC.</h2>
                </div>
            </div>          

            <div className="customer-review-panel">
                <h2>Customer Reviews</h2>
                <div>--Reviews--</div>
            </div>

            <div className="choose-path-panel">
                <h2>Choose Your Own Path</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className="choose-path-left">
                    <h2>Business Owners</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to='/full-qualify-process'>
                        <button className="green-button">SEE IF YOU QUALIFY</button>
                    </Link>
                    <img src={BusinessOwnersImage} alt="Business Owners" />
                </div>
                <div className="choose-path-right">
                    <h2>Affiliates</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to='/opt-in'>
                        <button className="purple-button">GET STARTED</button>
                    </Link>
                    <img src={AffiliatesOwnersImage} alt="Affiliates Owners" />
                </div>
            </div>

            <div className="works-panel">
                <h2>How It Works</h2>
                <div className="works-left">
                    <img src="" alt="Step 1" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <img src="" alt="Step 2" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <img src="" alt="Step 3" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to='/full-qualify-process'>
                        <button className="green-button">SEE IF YOU QUALIFY</button>
                    </Link>     
                </div>
                <div className="works-right">
                    <img src={HowItWorksImage} alt="How It Works" />
                </div>
            </div>    

            <div className="featured-panel">
                <h2>Featured Resources</h2>
                <div className="featured-left">
                    <h2>For Businesses</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="green-button">DOWNLOAD THE GUIDE</button>
                    <img src={BusinessResourcesImage} alt="Business Resources" />
                </div>

                <div className="featured-right">
                    <h2>For Affiliates</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="purple-button">DOWNLOAD THE GUIDE</button>
                    <img src={AffiliatesResourcesImage} alt="Affiliates Resources" />
                </div>
            </div>

            <div className="deserve-panel">
                <h2>Get What You Deserve</h2>
                <p>At HYDE, we are entrepreneurs just like you. The origin of the word “entrepreneur” is French. It translates loosely as “one who undertakes”. The way we see it, you did more than simply undertake, you succeeded. Now it’s time to build on that success exponentially. To get everything you’re entitled to.</p>
                <Link to='/full-qualify-process'>
                    <button className="green-button">SEE IF YOU QUALIFY</button>
                </Link> 
            </div>

        </div>
    );
}
 
export default HomePage;