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
                <h2 id="hero-heading">Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit,
                    felis sed finibus pretium, nisi leo sagittis orci, non cursus sem neque id purus.
                    Proin neque lorem, rhoncus sed magna a, egestas dapibus lectus.
                </p>
                <Link to="/reservations" className="btn-primary" role="button">Reserve a Table</Link>
            </div>
            <div className="hero-image">
                <img
                    src="/src/assets/restauranfood.jpg"
                    alt="Featured dish from Little Lemon restaurant"
                />
            </div>
        </section>
    );
};

export default CallToAction;