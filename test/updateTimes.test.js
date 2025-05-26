// import {describe, test, expect} from 'vitest';

import { initializeTimes, updateTimes } from '@utils/bookingReducer';

describe("updateTimes reducer", () => {

    test("returns updated times when UPDATE_TIMES is dispatched", () => {
        const initialState = initializeTimes(); // ✅ Call the function to get initial array
        const newTimes = ["18:00", "19:00"]; // simulated available times from fetchAPI
        const action = { type: 'UPDATE_TIMES', times: newTimes };

        const result = updateTimes(initialState, action);

        expect(result).toEqual(newTimes);
      });

      test("returns unchanged state for unknown action types", () => {
        const initialState = initializeTimes();
        const action = { type: 'UNKNOWN_ACTION' };

        const result = updateTimes(initialState, action);

        expect(result).toEqual(initialState);
      });

})