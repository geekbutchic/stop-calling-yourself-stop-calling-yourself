riddler = (str) => {
    return str + '???'
}

const result1 = riddler('hello');
result1;
const result2 = riddler('what even');
result2;

sentence = (str1, str2) => {
    return str1 + ' ' + str2; 
}

const finalGreet = sentence('oh', 'hi');
finalGreet;
const finalGreet2 = sentence('well', 'hello back');
finalGreet2;

subtract = (num1, num2, num3) => {
    return num1 - num2 - num3;
}

const subtract1 = subtract(10, 1, 2);
subtract1;
const subtract2 = subtract(8, 3, 5);
subtract2;
const subtract3 = subtract(100, 80, 25);
subtract3;

reverse = (num1, num2, num3) => {
    return num3 - num2 - num1;
}

const rewind1 = reverse(10, 1, 2);
rewind1;
const rewind2 = reverse(2, 1, 10);
rewind2; 

triple = (str) => {
    return str.repeat(3);
}

const three1 = triple('codeimmersives');
three1;
const three2 = triple('is the best ');
three2;

squared = (num) => {
    return Math.sqrt(num);
}

const hipToBeSquare1 = squared(16);
hipToBeSquare1;
const hipToBeSquare2 = squared(4);
hipToBeSquare2;
const hipToBeSquare3 = squared(9);
hipToBeSquare3;