// testimonials, including star ratings, customer images and customer details
import ReviewCard from '@components/ReviewCard';
import customerReviews from '@mock-data/CustomerReview';
import '@styles/CustomerReview.css';

const CustomersSay = () => {
    return (
        <section className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                {customerReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
};

export default CustomersSay;