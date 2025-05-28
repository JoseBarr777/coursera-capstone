// testimonials, including star ratings, customer images and customer details
import ReviewCard from '@components/ReviewCard';
import customerReviews from '@mock-data/CustomerReview';
import '@styles/CustomerReview.css';

const CustomersSay = () => {
    return (
        <section className="testimonials-section" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading">Testimonials</h2>
            <div className="testimonials-container" role="list" aria-label="Customer Reviews">
                {customerReviews.map(review => (
                    <div role="listitem" key={review.id}>
                        <ReviewCard review={review} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomersSay;
