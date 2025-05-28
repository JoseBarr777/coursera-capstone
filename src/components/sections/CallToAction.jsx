/****************************************************************************
 * sometimes referred to as the jumbotron or the hero, this component is
 * the call-to-action section that guides the user to click a call-to-action
 * button while enticing them to do so in as few words as possible
 * **************************************************************************/
import {Link} from 'react-router';
import '@styles/CallToAction.css';
import '@styles/Button.css';

const CallToAction = () => {
    return(
        <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-content">
                <h1 id="hero-heading">Little Lemon</h1>
                <h2 className="location-subheading">Chicago</h2>
                <p className="hero-description">
                    Experience Mediterranean flavors in the heart of Chicago. Enjoy fresh, chef-crafted dishes in a cozy, welcoming setting.
                </p>
                <Link to="/reservations" className="btn-primary" role="button" aria-label="Reserve a table at Little Lemon">Reserve a Table</Link>
            </div>
            <div className="hero-image" role="img" aria-label="Delicious dish served at Little Lemon">
                <img
                    src="/src/assets/restauranfood.jpg"
                    alt="A plated Mediterranean dish with greens and lemon at Little Lemon"
                />
            </div>
        </section>
    );
};

export default CallToAction;
