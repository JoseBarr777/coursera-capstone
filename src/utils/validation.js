export const validateForm = ({date, time, guestCount, occasion}) => {
    return Boolean(
        date
        && time
        && (guestCount >= 1)
        && (guestCount <= 10)
        && (occasion !== 'Not selected')
    );
};