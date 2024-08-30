// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.



var a = isNaN('11');  // false

// isNaN একটি জাভাস্ক্রিপ্ট ফাংশন যা কোনো মান সংখ্যা কিনা তা পরীক্ষা করে। যদি মানটি সংখ্যা না হয়, তাহলে এটি true রিটার্ন করে, আর যদি সংখ্যা হয়, তাহলে এটি false রিটার্ন করে।
// JavaScript automatically tries to convert the string '11' to a number, which succeeds, resulting in 11 (a valid number).
// Since 11 is a number, isNaN('11') returns false.


var a = isNaN(2 - 10);  // false

// In this expression, 2 - 10 is a simple arithmetic operation that results in -8.
// -8 is a valid number (though negative).
// Therefore, isNaN(2-10) returns false.
