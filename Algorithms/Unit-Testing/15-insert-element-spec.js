describe('Insert an integer x in the appropriate position into an  increasing order list.', () => {
    it('Insert item @ the middle', () => {
        let item = 3; //7;  //9; //0;  //
        let arr = [1, 2, 4, 5];
        // console.log(arr);
        let array = insert(item, arr);
        console.log(array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('Insert item @ the beginning', () => {
        let item = 0; //7;  //9; //0;  //
        let arr = [1, 2, 3, 4, 5];
        // console.log(arr);
        let array = insert(item, arr);
        console.log(array);
        expect(array).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('Insert item @ the end', () => {
        let item = 6; //7;  //9; //0;  //
        let arr = [1, 2, 3, 4, 5];
        // console.log(arr);
        let array = insert(item, arr);
        console.log(array);
        expect(array).toEqual([1, 2, 3, 4, 5, 6]);
    });

    /*
    let b = [1, 2, 3];
    b.push(0);
    for (let i = 0; i < b.length; i++) {
        b[i + 1] = b[i];
    }
    console.log(b);
    */
    
});