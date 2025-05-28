import {render, screen, within} from '@testing-library/react';
import {describe, test, vi, expect, beforeEach} from 'vitest';

import { validateForm } from '@utils/validation';
import BookingForm from '@components/BookingForm';


//state/props
const mockDispatch = vi.fn();

const sampleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

describe("Booking Form", () => {
    test("Renders the BookingForm heading", () => {
        //render the component
        render(<BookingForm availableTimes={sampleTimes} dispatch={mockDispatch}/>);

        //query for DOM nodes
        const headingElement = screen.getByLabelText("Choose date");

        //testing
        expect(headingElement).toBeInTheDocument();
    });

    test("Initialize Times", () => {

        //render in our component
        render(<BookingForm availableTimes={sampleTimes} dispatct={mockDispatch} />);

        //query for dom nodes
        const timeSelect = screen.getByLabelText("Choose time:");
        const options = within(timeSelect).getAllByRole("option");

        //test using the expect() function
        expect(options.length).toBe(sampleTimes.length);

        //iteratively testing each element in the array.
        sampleTimes.forEach((time, index) => {
            expect(options[index]).toHaveTextContent(time);
        })
    })
});

describe("HTML5 validation", () => {

    beforeEach(()=>{
        render(<BookingForm availableTimes={sampleTimes} dispatch={mockDispatch} />);
    });

    test('input: date has type and required', () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();
    });

    test('input: time has required attribute', () => {
        const timeInput = screen.getByLabelText(/choose time/i);
        expect(timeInput).toBeRequired();
    });

    test('input: guestCount has type, min, max, and required', () => {
        const guestInput = screen.getByLabelText(/number of guests/i);
        expect(guestInput).toHaveAttribute('type', 'number');
        expect(guestInput).toHaveAttribute('min', '1');
        expect(guestInput).toHaveAttribute('max', '10');
        expect(guestInput).toBeRequired();
    });

    test('input: occasion is a select and required', () => {
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect.tagName).toBe('SELECT');
        expect(occasionSelect).toBeRequired();
    });
});

describe("JS validation functions", () => {

    test("returns true for valid input", () => {
        const result = validateForm({
          date: "2025-06-01",
          time: "19:00",
          guestCount: 4,
          occasion: "Birthday"
        });
        expect(result).toBe(true);
      });

      test("returns false for missing date", () => {
        const result = validateForm({
          date: "",
          time: "19:00",
          guestCount: 4,
          occasion: "Birthday"
        });
        expect(result).toBe(false);
      });

      test("returns false for guestCount too low", () => {
        const result = validateForm({
          date: "2025-06-01",
          time: "19:00",
          guestCount: 0,
          occasion: "Birthday"
        });
        expect(result).toBe(false);
      });

      test("returns false for default occasion", () => {
        const result = validateForm({
          date: "2025-06-01",
          time: "19:00",
          guestCount: 2,
          occasion: "Not selected"
        });
        expect(result).toBe(false);
      });
})