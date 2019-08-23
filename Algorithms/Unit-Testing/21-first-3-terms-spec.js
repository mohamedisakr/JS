describe('Put the first three terms of a sequence of integers of arbitrary length in increasing order.', () => {
    it('test 1 : The maximum, median, and minimum.', () => {
        let array = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
        sortFirstThree(array);
        // [min, max] = res;
        expect(array[0]).toBe(2);
        expect(array[1]).toBe(12);
        expect(array[2]).toBe(16);    
    });

    // it('test 2 : empty array.', () => {
    //     let array = [];
    //     let res = getMinAndMax(array);
    //     [min, max] = res;
    //     expect(min).toBe(undefined);
    //     expect(max).toBe(undefined);
    //     // expect(mean).toBe(4);
    //     // expect(median).toBe(4);        
    // });

});