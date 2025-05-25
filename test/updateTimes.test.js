// import {describe, test, expect} from 'vitest';

import { initializeTimes, updateTimes } from '@utils/bookingReducer';

describe("updateTimes reducer", () => {

    test("returns same state when UPDATE_TIMES is dispatched (initial version)", () => {
        //state
        const initialState = initializeTimes;
        const action = { type: 'UPDATE_TIMES', date: '2025-05-20'};

        const result = updateTimes(initialState, action);

        expect(result).toEqual(initialState);
    });

    test("returns unchanged state for unknown action types", () => {
        const initialState = initializeTimes;
        const action = {type: 'UNKNOWN_ACTION'};
        const result = updateTimes(initialState, action);

        expect(result).toEqual(initialState);
    })
})