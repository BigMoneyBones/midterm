// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){

    let sum = 0;

    if (num1 < num2) {

        for (let count = num1; count <= num2; count++) {

            if (count % 2 !== 0) {

                sum = sum + count;

            }

        }

        return sum;

    }

    if (num1 > num2) {

        for( let count = num1; count >= num2; count--) {

            if (count % 2 !== 0) {

                sum = sum + count;

            }

        }

        return sum;

    }

}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(2,4));
console.log(sumOfOdds(1,7));
console.log(sumOfOdds(-5,11));
console.log(sumOfOdds(-1,2));
console.log(sumOfOdds(3,1));
console.log(sumOfOdds(8,2));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For example arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1, arr2){


    let arr3 = [];

    for(let count = 0; count < arr1.length; count++) {

        arr3[count] = arr1[count] - arr2[count];

    }

    return arr3;

}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like


const a = [5, 6, 7, 8];
const b = [1, 2, 3, 4];
const c = [3, 4, 6, 7];
const d = [8, 4, 2, 7];

console.log(arraySubtract(a,b));
console.log(arraySubtract(c,d));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr4, str1, str2){

    // let str1 = "dog";
    // let str2 = "cat";
    // let arr4 = ['monkey', 'rabbit']


    arr4.unshift(str1);
    arr4.push(str2);
    return arr4;

}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

let str1 = "dog";
let str2 = "cat";
let arr4 = ['monkey', 'rabbit']

console.log(surroundArray(arr4, str1, str2 ))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(longestStringArr){
    
    let longest = longestStringArr[0];

    if (longestStringArr[0] === undefined) {

        longest = '';

    }

    for (let count = 1; count < longestStringArr.length; count++) {

        if (longestStringArr[count].length > longest.length) {

            longest = longestStringArr[count];

        } 

    }

    return longest ;

}

/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

const arrOfStr = ["one", "two", "three", "four"];
const arrOfStr2 = ["1", "12", "123", "1234"];

const emptyArr = [];
console.log(longestString(arrOfStr));
console.log(longestString(arrOfStr2));
console.log(longestString(emptyArr));


console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str3){

    let replace = "";

    for (let count = 0; count < str3.length; count++) {

        if (str3[count] === 'r') {

            replace += "s";

        } else if (str3[count] === 'R') {

            replace += "S";

        } else if (str3[count] === 's') {

            replace += "r";

        } else if (str3[count] === 'S') {

            replace += "R";

        } else {

            replace += str3[count];

        }

    }

    return replace;

}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(sToR("stringS aRe Strings"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num3){

    if (num3 % 4 === 0 && num3 % 7 === 0) {

        return true;

    } 

    return false;

}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(divisibleBy4And7(28));
console.log(divisibleBy4And7(56));
console.log(divisibleBy4And7(21));


console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str4){
    
    if (str4.includes("!") && str4.includes("?")) {

        return true;

    } 

    return false;

}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(exclamationAndQuestion("what are you doing!?"));
console.log(exclamationAndQuestion("what are you doing?!"));
console.log(exclamationAndQuestion("how are you doing today?"));
console.log(exclamationAndQuestion("HELLO!"));


console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str5){

    let aCount = 0;
    let bCount = 0;

    for (let count = 0; count < str5.length; count++) {

        if (str5[count] === "a" || str5[count] === "A") {

            aCount ++;

        } else if (str5[count] === "b" || str5[count] === "B") {

            bCount++;

        }

    }

    return [aCount, bCount]; //returns calculated values as an array?

}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(countAB("how many a and how many b are there in this string? aa bb A B Aaa BbbB"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr5, str6){

    let newArr5 = [];

    for (let count = 0; count < arr5.length; count++) {

        if( arr5[count][arr5[count].length-1] === "s" || arr5[count][arr5[count].length-1] === "S") {

            arr5[count] = arr5[count] + str6;

        } 

    }

    return arr5;

}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(addStringIfLastS(["cats", "dog", "lizards"], "animal"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr){

    // let newArr = [];
    let small1 = arr[0];
    let small2 = arr[1];

    if (arr.length < 2) {

        return undefined;

    }  

    for (let count = 0; count < arr.length; count++) {

        if (arr[count] < small1) {

            small1 = arr[count];

        }

    }
            
    for (let count = 0; count < arr.length; count++) {
            
        if (arr[count] < small2 && arr[count] > small1) {

            small2 = arr[count];

        } 

    }

    // newArr.unshift(small1);
    // newArr.push(small2);

    return [small1, small2];

}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(twoSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(twoSmallest([2, 9, 3, 0, 8, 6, 1]));
console.log(twoSmallest([7, 2, -11, 4, -2, 6, -8, -5, 814, 9, 120]));
console.log(twoSmallest([1, 2]));
console.log(twoSmallest([1]));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

