/**
 * Converts a Date object to a YYYY-MM-DD string (HTML date input format).
 */
export const formatDateForInput = (date) => {
    if (!(date instanceof Date)) return '';
    return date.toISOString().split('T')[0];
  };

  /**
   * Converts a YYYY-MM-DD string (from input) to a Date object.
   */
  export const parseDateFromInput = (dateString) => {
    return new Date(dateString);
  };