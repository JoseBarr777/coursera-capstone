// the component that loops over the specials that come from a data source (carousel)
import { Link } from 'react-router';
import SpecialsCard from "../SpecialsCard";
import specials from "../../mock-data/Specials";
import '@styles/Specials.css';
import '@styles/Button.css';

function Specials() {
  return (
    <section className="specials-section" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading" className="specials-title">Specials</h2>
        <Link
          to="/order-online"
          className="btn-primary"
          role="button"
          aria-label="Order online from Little Lemon specials menu"
        >
          Order Online
        </Link>
      </div>
      <div className="specials-container" role="list" aria-label="Menu Specials">
        {specials.map(special => (
          <div key={special.id} role="listitem">
            <SpecialsCard special={special} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
