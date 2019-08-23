describe('Find the longest word in an English sentence.', () => {
    it('The longest word length in the sentence should equal 0.', () => {
        let sentence = ''; //'Describe an algorithm to find the longest word in an English sentence';
        let longest = findLongestWord(sentence);
        expect(longest).toBe(0);
    });

    it('The longest word length in the sentence should equal 9.', () => {
        let sentence = 'Describe an algorithm to find the longest word in an English sentence';
        let longest = findLongestWord(sentence);
        expect(longest).toBe(9);
    });
});