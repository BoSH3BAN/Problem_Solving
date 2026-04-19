console.log(new URL("https://www.youtube.com/playlist?list=PLDoPjvoNmBAxCjHi-HIfNoZrMkfbuvVDY").href)
/*
    Find The Missing Letter
    ======== 13 ===========   
*/

function findTheMissingLetterIn(string) {
    let alpha = `abcdefghijklmnopqrstuvwxyz`;
    let start = alpha.indexOf(string[0]);
    let compareStr =  alpha.slice(start);
    for(let i in string){
        if(string[i] !== compareStr[i]){
            return missed = compareStr[i]  ; 
        }
    };
    return "No Missed"
};



console.log( findTheMissingLetterIn("defgi"))// h
console.log( findTheMissingLetterIn("abcdeghi"))// f 
console.log( findTheMissingLetterIn("abde"))// c 
console.log( findTheMissingLetterIn("xyz"))// No Missing Letter In Sequence
console.log( findTheMissingLetterIn("rtu"))//  s
console.log( findTheMissingLetterIn("qrs"))// No Missing Letter In Sequence


// ************************************************************************************

function findTheMissingLetterIn2(givenLetters){
    let alpha = `abcdefghijklmnopqrstuvwxyz`;
    let start = alpha.indexOf(givenLetters[0]);
    
    for(let i = 0 ; i<givenLetters.length ; i++){
        if(givenLetters[i] !== alpha[start + i]){
            return alpha[start+i];
        }
    }
    
    return"No Missing Letter In Sequence";
};

console.log("/".repeat(66))// h

console.log( findTheMissingLetterIn2("defgi"))// h
console.log( findTheMissingLetterIn2("abcdeghi"))// f 
console.log( findTheMissingLetterIn2("xyz"))// No Missing Letter In Sequence

/*
    Number To Reversed Array
    ========== 14 ==========
*/


function reverseNumber(theNumber=0){
    let myArr = Array.from(`${theNumber}`).reverse().map(ele=>+ele);
    return myArr;
};


console.log(reverseNumber(2158643)) // [3,4,6,8,5,1,2]
console.log(reverseNumber(564987654)) // [4,5,6,7,8,9,4,6,5]
console.log(reverseNumber(529132)) // [2,3,1,9,2,5] 
console.log(reverseNumber(2524112)) // [2,1,1,4,2,5,2] 

/*
    Find Longest Word In A String
    ============ 15 =============
*/

function longWordInString(string){
    let myArr = string.split(" ");
    return myArr.reduce((acc,cur)=>acc.length > cur.length ?acc:cur)+
    ` (${ myArr.reduce((acc,cur)=>{return acc.length > cur.length ?acc:cur;}).length})`;    
}



console.log(longWordInString("I Love JavaScript And Prgramming AndThisIsTest"))
// longWordInString("I Love JavaScript And Prgramming")


/*
    Remove Duplicated Words
    ========= 16 ==========
*/

function removeDuplicatedWords(string){
    let myArr = string.split(" ");
    let myNewArr = new Set(myArr);
    
    console.log(Array.from(myNewArr).join(" "))
};

removeDuplicatedWords("Hello Elzero Web Web Hello School"); // Hello Elzero Web School
removeDuplicatedWords("I Am A Student In EUC Student"); // I Am A Student In EUC
removeDuplicatedWords("The First The First Step Step"); // The First Step 

console.log("/".repeat(66))

function removeDuplicatedWords2(string){
    let myArr = string.split(" ");
    let myNewArr = [];

    for(let i  in myArr){
        if(!myNewArr.includes(myArr[i])){
            myNewArr.push(myArr[i])
        }
    }
    
    console.log(myNewArr.join(" "));
};

removeDuplicatedWords2("Hello Elzero Web Web Hello School"); // Hello Elzero Web School
removeDuplicatedWords2("I Am A Student In EUC Student"); // I Am A Student In EUC
removeDuplicatedWords2("The First The First Step Step"); // The First Step 


console.log("/".repeat(66))

function removeDuplicatedWords3(string){
    let myArr = string.split(" ");
    let myNewArr = [];

    for(let i  in myArr){
        if(myNewArr.indexOf(myArr[i]) === -1 /* indexOf -1 Mean Not Found */){
            myNewArr.push(myArr[i])
        }
    }
    
    console.log(myNewArr.join(" "));
};

removeDuplicatedWords3("Hello Elzero Web Web Hello School"); // Hello Elzero Web School
removeDuplicatedWords3("I Am A Student In EUC Student"); // I Am A Student In EUC
removeDuplicatedWords3("The First The First Step Step"); // The First Step 

console.log("/".repeat(66))

let removeDuplicatedWords4 = string => console.log([...new Set(string.split(" "))].join(" "));

removeDuplicatedWords4("Hello Elzero Web Web Hello School"); // Hello Elzero Web School
removeDuplicatedWords4("I Am A Student In EUC Student"); // I Am A Student In EUC
removeDuplicatedWords4("The First The First Step Step"); // The First Step 

/*
Remove Character From String
=========== 17 =============
*/

console.log("/".repeat(66))

let removeCharFrom = (string,rmov) => string.replaceAll(rmov.toUpperCase(),"").replaceAll(rmov.toLowerCase(),"");


console.log(removeCharFrom("ElddzeroD WebDD ddSchool","d"))  // Elzero Web School
console.log(removeCharFrom("ElxzeroX WebX Sxchool","x")) // Elzero Web School
console.log(removeCharFrom("Elzero@@ Web@ @@School","@")) // Elzero Web School

/*
    Add Commas And Underscore To Number
    ============= 18 ==================
*/

function addCommasAndUnderscore(num){
    // let number = num.toString().length;
    // if(number === 3){
    //     return num
    // }else{
    //     return 
    // }
    let rew = num;
    let req = num.toString();
    let und = req.slice(-3);
    let com = req.slice(-7,-6);
    if(req.length === 3){
        return num
    }if(req.length>3){
        if(req.length===7||req.length===8||req.length===9){
            return req.replace(und,"_"+und).replace(com,",")
        }
    }
};



// console.log(addCommasAndUnderscore(123))
// console.log(addCommasAndUnderscore(1234))
// console.log(addCommasAndUnderscore(1234567))
// console.log(addCommasAndUnderscore(12345678))
// console.log(addCommasAndUnderscore(123456789))
// console.log(addCommasAndUnderscore(123456789112))
// console.log(addCommasAndUnderscore(12345678911234))
// console.log("acbg".slice(-3,-2))


function addCommasAndUnderscore2(num){
    let resault = num.toLocaleString();
    resault = resault.split("");
    resault[resault.length-4] = "_";
    resault = resault.join("")
    return resault;
};


console.log(addCommasAndUnderscore2(123))
console.log(addCommasAndUnderscore2(1234))
console.log(addCommasAndUnderscore2(1234567))
console.log(addCommasAndUnderscore2(12345678))
console.log(addCommasAndUnderscore2(123456789))
console.log(addCommasAndUnderscore2(123456789112))
console.log(addCommasAndUnderscore2(12345678911234))




let addCommasAndUnderscore3 = (va) => [...[...va.toLocaleString()].reverse().join("").replace(/,/,"_")].reverse().join("");

console.log(addCommasAndUnderscore3(123))
console.log(addCommasAndUnderscore3(1234))
console.log(addCommasAndUnderscore3(1234567))
console.log(addCommasAndUnderscore3(12345678))
console.log(addCommasAndUnderscore3(123456789))
console.log(addCommasAndUnderscore3(123456789112))
console.log(addCommasAndUnderscore3(12345678911234))

console.log(new URL("https://www.youtube.com/playlist?list=PL3iticg1TvA-jMsFwDgdb6Cy_L__qL56H").href)

/*
    Even Or Odd
    Codeophrenia
    -1-
*/

let checkNum = (num) => num % 2 === 0? "Even":"Odd";


console.log(checkNum(8000))

/*
    Sum Of Positives
    Codeophrenia
    -2-
*/

let sumOfPositives = (...nums)=> nums.filter(e=>e>-1).reduce((a,c)=>a+c,0);

console.log(sumOfPositives(100,400,9,-800))
console.log(sumOfPositives(-2,8,-9,0,2))
console.log(sumOfPositives(-2,-8,-9,-2))

/*
    Sum Without The Highest And The Lowest Number
    Codeophrenia
    -3-
*/

function sumWithoutHighestAndLowest(...nums){
    return  nums.length < 2 ? 0 : nums.reduce((a,c)=>a+c) - (Math.max(...nums)+Math.min(...nums));
}

console.log(sumWithoutHighestAndLowest(7,2,1))
console.log(sumWithoutHighestAndLowest(1,2,3,4,5,6,7,9))
console.log(sumWithoutHighestAndLowest(1,1,2,3,4,5,6,7,8,9,9))
// // //
let sumWithoutHighestAndLowest2 = (...nums) => nums === null?0:nums.sort().slice(1,-1).reduce((a,c)=>a+c);


console.log(sumWithoutHighestAndLowest2(7,2,1))
console.log(sumWithoutHighestAndLowest2(1,2,3,4,5,6,7,9))
console.log(sumWithoutHighestAndLowest2(1,1,2,3,4,5,6,7,8,9,9))


/*
    String-Repeat
    Codeophrenia
    -4-
*/

let repeatStr = (n=0,s="") => s.repeat(n);

console.log(repeatStr(10,"A"))
//******************************************
function repeatStr2(number,string){
    let newStr = "";
    for(i=0;i<number;i++){
        newStr+=string
    }
    return newStr;
}

console.log(repeatStr2(10,"A"))


/*
    Convert Number To Reversed Array
    Codeophrenia
    -5-
*/

let convertNumToReversedArr = (num) => [...String(num)].reverse();

console.log(convertNumToReversedArr(742598))
console.log(742598)

/*
    Counting Sheep
    Codeophrenia
    -6-
*/

function countingSheep(...sheep){
    return `${sheep.filter((e)=>e===true).length} Sheep Presented`
}

console.log(
countingSheep(true,true,true,false,true,true,true,
    true,true,false,true,false,true,false,true,true,
    true,true,false,false,true,true
)
)



/*
    Get Opposite
    Codeophrenia
    -7-
*/
let getOpposite = (n)=>-n;


console.log(getOpposite(-50))
console.log(getOpposite(60))
console.log(getOpposite(-80))


/*
    Return Negative
    Codeophrenia
    -8-
*/

let returnNegative = (n=0)=>n>0?-n:n;

console.log(returnNegative(-10))
console.log(returnNegative(10))
console.log(returnNegative(0))



/*
    Jenny's secret
    Codeophrenia
    -9-
*/

let greet = (n) => {
    let regExp = /^johnny$/i;
    switch (n) {
        case undefined:
            return "Write A Name";
            break;
        case  regExp.test(n)?n.match(regExp).input:false:
            return `Hello, my Darling ${n}`;
            break;
            default: 
            return `Hello, ${n}`;
    };
};

console.log(greet())
console.log(greet("JohnnY"))
console.log(greet("johny"))
console.log(greet("joHnNy"))

console.log("/".repeat(20))

let greet2 = (n) => {
    return /^johnny$/i.test(n)?`Hello, my Love ${n}`:n === undefined?
    "Write A Name":`Welcome,${n}`;
};


console.log(greet2())
console.log(greet2("JohnnY"))
console.log(greet2("johny"))
console.log(greet2("joHnNyjoHnNy"))