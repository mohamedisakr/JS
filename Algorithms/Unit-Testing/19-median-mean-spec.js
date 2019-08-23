
describe('Find the maximum, median, mean, and minimum of a set of three integers.', () => {
    it('test 1 : The maximum, median, mean, and minimum.', () => {
        let a = 5;
        let b = 3;
        let c = 4;
        [max, mean, median, min] = calculateStat(a, b, c);
        expect(max).toBe(5);
        expect(mean).toBe(4);
        expect(median).toBe(4);
        expect(min).toBe(3);
    });

    it('test 2 : The maximum, median, mean, and minimum.', () => {
        let a = 8;
        let b = 7;
        let c = 6;
        [max, mean, median, min] = calculateStat(a, b, c);
        expect(max).toBe(8);
        expect(mean).toBe(7);
        expect(median).toBe(7);
        expect(min).toBe(6);
    });

});