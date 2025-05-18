//the component that loops over the specials that come from a data source (carosoul)
import { Link } from 'react-router';
import SpecialsCard from "../SpecialsCard";
import specials from "../../mock-data/Specials";
import '@styles/Specials.css';
import '@styles/Button.css';

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <Link to="/order-online" className="btn-primary" role="button">Order Online</Link>
      </div>
      <div className="specials-container">
        {specials.map(special => (
          <SpecialsCard key={special.id} special={special} />
        ))}
      </div>
    </section>
  );
};

export default Specials;