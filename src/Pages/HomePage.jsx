import CallToAction from '@components/sections/CallToAction';
import Specials from '@components/sections/Specials';
import CustomersSay from '@components/sections/CustomersSay';
import About from '@components/sections/About';

function HomePage() {
  return (
    <div className="homepage" role="region" aria-label="Homepage Content">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <About />
    </div>
  );
};

export default HomePage;