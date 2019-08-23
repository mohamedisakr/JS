describe('The ternary search algorithm.', () => {
    // it('Empty array', () => {
    //     let array = []; 
    //     let x = 5;
    //     let pos = search(x, array);
    //     expect(pos).toBe(-1);
    // });

    // it('Position should be 4', () => {
    //     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //     let x = 5;
    //     let pos = search(x, array);
    //     expect(pos).toBe(4);
    // });

    it('Element less than first element should be -1', () => {
        let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        let key = 5;
        let pos = search(key, array);
        expect(pos).toBe(-1);
    });

    it('Element greater than the last element should be -1', () => {
        let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        let key = 200;
        let pos = search(key, array);
        expect(pos).toBe(-1);
    });
});