import { Link } from 'react-router';
import '@styles/SpecialsCard.css';
import '@styles/Button.css';

const SpecialsCard = ({ special }) => {
    const { title, price, description, image } = special;
    return(
        <article className="special-card">
            <img src={image} alt={title} className="special-image"/>
            <div className="special-content">
                <div className="special-header">
                    <h4 className="special-title">{title}</h4>
                    <p className="special-price">{price}</p>
                </div>
                <p className="special-description">{description}</p>
                <Link to="/order-online" className="btn-primary" role="button">Order a delivery</Link>
            </div>
        </article>
    );
};

export default SpecialsCard;