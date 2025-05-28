//the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it
import '../../styles/About.css';

function About() {
  return (
    <section aria-labelledby="about-heading" className="about-section">
      <div className="about-content">
        <h2 id="about-heading">About Little Lemon</h2>
        <h3 className="location-subheading">Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas lacus quis tincidunt luctus. Sed tempor tellus eu lorem varius, vel consequat sem molestie. In sed suscipit mi. Phasellus rhoncus ligula purus, vel volutpat elit placerat et. Nunc eu mi laoreet, rutrum diam quis, gravida metus.
        </p>
      </div>
      <div className="about-images" role="group" aria-label="Photos of Mario and Adrian">
        <img className="image-top" src="/src/assets/Mario and Adrian A.jpg" alt="Mario and Adrian preparing food in the kitchen" />
        <img className="image-bottom" src="/src/assets/Mario and Adrian b.jpg" alt="Mario and Adrian smiling together in the restaurant" />
      </div>
    </section>
  );
};

export default About;
