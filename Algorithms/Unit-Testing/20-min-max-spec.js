describe('Find both the largest and the smallest integers.', () => {
    it('test 1 : The maximum,and minimum.', () => {
        let array = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
        let res = getMinAndMax(array);
        [min, max] = res;
        expect(min).toBe(2);
        expect(max).toBe(20);
        // expect(mean).toBe(4);
        // expect(median).toBe(4);        
    });

    it('test 2 : empty array.', () => {
        let array = [];
        let res = getMinAndMax(array);
        [min, max] = res;
        expect(min).toBe(undefined);
        expect(max).toBe(undefined);
        // expect(mean).toBe(4);
        // expect(median).toBe(4);        
    });

});