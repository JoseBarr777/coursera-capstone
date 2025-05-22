//the component for the table reservations page
import BookingForm from "@components/BookingForm";

function BookingPage({availableTimes, dispatch}) {

 return(
  <>
  <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
  </>
 )
};

export default BookingPage;