import { sum } from "../sum"


test('description of test case', () => {

    const result = sum(10, 20);

    // Assertion
    expect(result).toBe(30);
});