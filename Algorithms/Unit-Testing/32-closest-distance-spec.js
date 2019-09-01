describe("Find the two elements that are closest together.", () => {
  it("Using SORT The closest distance should be 1", () => {
    let a = [10, 2, 4, 1, 7];
    let min = getClosestDistanceWithSort(a);
    expect(min).toBe(1);
  });

  it("Using BRUTE FORCE The closest distance should be 1", () => {
    let a = [10, 2, 4, 1, 7];
    let min = getClosestDistanceWithBruteForce(a);
    expect(min).toBe(1);
  });
});
