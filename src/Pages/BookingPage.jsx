//the component for the table reservations page
import BookingForm from "@components/BookingForm";

function BookingPage({availableTimes, dispatch, submitForm}) {

 return(
  <>
  <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
  </>
 )
};

export default BookingPage;