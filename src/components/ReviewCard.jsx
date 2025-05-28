import '@styles/ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { name, rating, profilePicture, review: reviewText } = review;
    // Generate star rating display
    const renderRating = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star filled" : "star"}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="review-card">
            <div className="review-header">
                <div className="rating">
                    <p className="rating-label">Rating</p>
                    <div className="stars">{renderRating()}</div>
                </div>
                <div className="reviewer">
                    <img
                        src={profilePicture}
                        alt={`${name}'s profile`}
                        className="profile-picture"
                    />
                    <p className="name">{name}</p>
                </div>
            </div>
            <blockquote className="review-text">{reviewText}</blockquote>
        </div>
    );
};

export default ReviewCard;