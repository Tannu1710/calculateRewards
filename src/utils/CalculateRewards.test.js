import { calculatePoints, CalculateRewards } from "./CalculateRewards";

describe('Reward Points Calculation', () => {
    test('return 0 for non-numeric input', () => {
        expect(calculatePoints("abc")).toBe(0);
        expect(calculatePoints(null)).toBe(0);
        expect(calculatePoints(undefined)).toBe(0);
        expect(calculatePoints(NaN)).toBe(0);
    });

    test('calculates 90 points for $120 purchase', () => {
        expect(calculatePoints(120)).toBe(90);
    });

    test('calculates 50 points for $100 purchase', () => {
        expect(calculatePoints(100)).toBe(50);
    });

    test('calculates 0 points for $50 purchase', () => {
        expect(calculatePoints(50)).toBe(0);
    });

    test('calculates 30 points for $80 purchase', () => {
        expect(calculatePoints(80)).toBe(30);
    });

    test('calculates 0 points for $-90.50 purchase', () => {
        expect(calculatePoints(-90.50)).toBe(0);
    });

    test('calculates 2599850 points for $1300000 purchase', () => {
        expect(calculatePoints(1300000)).toBe(2599850);
    });

    test('calculates correct points for non-integer values', () => {
        expect(calculatePoints(100.2)).toBe(50);
        expect(calculatePoints(100.4)).toBe(51);
    });

test('calculateRewards should return correct reward data', ()=>{
    const transactions = [{
        "transactionId": "T001",
        "customerId": "C001",
        "name": "John Doe",
        "date": "2023-12-15",
        "product": "Laptop",
        "price": 120.50
      },
      {
        "transactionId": "T002",
        "customerId": "C002",
        "name": "Jane Smith",
        "date": "2024-01-20",
        "product": "Phone",
        "price": 80.00
      }];
      const {transactionRewards,monthlyRewards,totalRewards} = CalculateRewards(transactions);
      expect(transactionRewards[0].rewardPoints).toBe(30);
      expect(transactionRewards[1].rewardPoints).toBe(91);
      expect(monthlyRewards['December 2023']).toHaveLength(1);
      expect(monthlyRewards['January 2024']).toHaveLength(1);
      expect(totalRewards['John Doe']).toBe(91);
      expect(totalRewards['Jane Smith']).toBe(30);
    })
});