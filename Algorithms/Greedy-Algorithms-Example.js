// https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/
// Activity Selection Problem Greedy Algorithm
// using 2 arrays, the first array for start and the second for end
/*
Example 1 : Consider the following 3 activities sorted by
by finish time.
     start[]  =  {10, 12, 20};
     finish[] =  {20, 25, 30};
A person can perform at most two activities. The
maximum set of activities that can be executed
is {0, 2} [ These are indexes in start[] and
finish[] ]

Example 2 : Consider the following 6 activities
sorted by by finish time.
     start[]  =  {1, 3, 0, 5, 8, 5};
     finish[] =  {2, 4, 6, 7, 9, 9};
A person can perform at most four activities. The
maximum set of activities that can be executed
is {0, 1, 3, 4} These are indexes in start[] and finish[]
*/

function printMaxActivities(s, f) {
    let n = s.length;
    let i;
    let j;

    console.log(`Following activities are selected from ${n} activities`);

    // The first activity always gets selected 
    i = 0;
    console.log(i);

    // Consider rest of the activities 
    for (j = 1; j < n; j++) {
        // If this activity has start time greater than or 
        // equal to the finish time of previously selected 
        // activity, then select it 
        if (s[j] >= f[i]) {
            console.log(j);
            i = j;
        }
    }
}

// let s = [1, 3, 0, 5, 8, 5];
// let f = [2, 4, 6, 7, 9, 9];
// printMaxActivities(s, f);

function Activitiy(start, finish) {
    this.start = start;
    this.finish = finish;
}

function activityCompare(active1, active2) {
    if (active1.finish < active2.finish) { return -1; }
    else if (active1.finish > active2.finish) { return 1; }
    else { return 0; }
}

const activity1 = new Activitiy(1, 2);
const activity2 = new Activitiy(3, 4);
const activity3 = new Activitiy(0, 6);
const activity4 = new Activitiy(5, 7);
const activity5 = new Activitiy(8, 9);
const activity6 = new Activitiy(5, 9);

// create activity array
let activityList = [activity1, activity6, activity3, activity4, activity2, activity5];
let a = activityList.sort((a, b) => activityCompare(a, b));    //((a, b) => a.finish - b.finish);
// console.log(activityList);

function printMaxActivitiesArray(arr) {
    // Sort jobs according to finish time 
    //sort(arr, arr + n, activityCompare);

    let n = arr.length;
    console.log("Following activities are selected ");

    // The first activity always gets selected 
    let i = 0;
    console.log(`(${arr[i].start} ,  ${arr[i].finish})`);

    // Consider rest of the activities 
    for (let j = 1; j < n; j++) {
        // If this activity has start time greater than or 
        // equal to the finish time of previously selected 
        // activity, then select it 
        if (arr[j].start >= arr[i].finish) {
            console.log(`(${arr[i].start} ,  ${arr[i].finish})`);
            i = j;
        }
    }
}

// ********************** todo test the new function using activity array **********************
printMaxActivitiesArray(a);


// console.log(activityCompare(activity1,activity2));

// for (let i = 2; i<s.length;i++){
//     document.write(`const activity${i + 1} = new  Activitiy(${s[i]}, ${f[i]});<br/>`);
// }

// Cashier’s Algorithm - Rosen
/*
function change(amount, denominations) {
    let n = denominations.length;
    let coins = 0;
    for (let i = 0; i < n; i++) {
        while (amount >= denominations[i]) {
            coins++;
            amount -= denominations[i];
        }
    }
    return coins;
}

amount = 67;
a = [25, 10, 5, 1];
let coins = change(amount, a);
document.write(`The # of coins needed to change ${amount} are ${coins}`);
*/

/*

let a = [5, 3, 4, 2, 1];
let t = 6;

let currentTime = 0
let numberOfThings = 0

a.sort();

for (let i = 0; i < a.length; i++) {
    currentTime += a[i];
    if (currentTime > t) { break; }
    numberOfThings++;
}
document.write(numberOfThings);

function divide(n) {
    while (n >= 0) {
        let m = 1 / n;
        n--;
        document.write(`m = ${m} and n = ${n}<br/>`);
    }
}

divide(3);

function sum(n) {
    sum = 0;
    while (i < 10) {
        sum = sum + i
    }
}

sum(4);

function choose(a, b) {
    let x = a || b;
}

let x = choose(3, 4);
*/
