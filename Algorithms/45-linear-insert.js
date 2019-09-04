function insert(item, a) {
    const n = a.length;
    let i = 0;
    let pos = 0;
    while (i <= n && item >= a[i]) {
        i++;
    }
    if (item <= a[i]) {
        pos = i;
    } else {
        pos = n;
    }
    return pos;
}
