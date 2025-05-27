import { updateTimes } from '@utils/bookingReducer';

describe("updateTimes reducer", () => {
  test("returns new times when UPDATE_TIMES action is dispatched", () => {
    const initialState = [];
    const newTimes = ["18:00", "19:30"];
    const action = { type: 'UPDATE_TIMES', times: newTimes };

    const result = updateTimes(initialState, action);

    expect(result).toEqual(newTimes);
  });

  test("returns unchanged state for unknown action types", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: 'UNKNOWN_ACTION' };

    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
  });
});
