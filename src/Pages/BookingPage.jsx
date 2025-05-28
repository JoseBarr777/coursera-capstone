// the component for the table reservations page
import BookingForm from "@components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-page-heading">
      <h2 id="booking-page-heading" className="sr-only">Table Reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
};

export default BookingPage;
