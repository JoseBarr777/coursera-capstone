import { describe, test, expect } from 'vitest';
import { initializeTimes } from '@utils/bookingReducer';

describe("initializeTimes", () => {
  test("returns static times", () => {
    const result = initializeTimes();

    expect(result).toEqual([
      "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]);

    expect(result.length).toBe(6);
  });
});
