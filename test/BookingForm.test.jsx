import {render, screen, within} from '@testing-library/react';
import {describe, test, vi, expect} from 'vitest';

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