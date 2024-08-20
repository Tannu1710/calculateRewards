import { calculateRewards } from "./calculateRewards";

describe('calculateRewards', () => {
    test('return 0 for non-numeric input', () => {
        expect(calculateRewards("abc")).toBe(0);
        expect(calculateRewards(null)).toBe(0);
        expect(calculateRewards(undefined)).toBe(0);
        expect(calculateRewards(NaN)).toBe(0);
    }),

    test('calculates 90 points for $120 purchase', () => {
        expect(calculateRewards(120)).toBe(90);
    });

    test('calculates 50 points for $100 purchase', () => {
        expect(calculateRewards(100)).toBe(50);
    });

    test('calculates 0 points for $50 purchase', () => {
        expect(calculateRewards(50)).toBe(0);
    });

    test('calculates 30 points for $80 purchase', () => {
        expect(calculateRewards(80)).toBe(30);
    });

    test('calculates correct points for non-integer values', () => {
        expect(calculateRewards(100.2)).toBe(50);
        expect(calculateRewards(100.4)).toBe(51);
    });
});