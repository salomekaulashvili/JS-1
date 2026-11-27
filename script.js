// 1. Number() – კონვერტაცია

//let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));
// let currentYear = Number(prompt("შეიყვანეთ მიმდინარე წელი"));
// let birthYear = Number(prompt("შეიყვანეთ დაბადების წელი"));

// let calculatedAge = currentYear - birthYear;

// console.log("შეყვანილი ასაკი:", age);
// console.log("მიმდინარე წელი:", currentYear);
// console.log("დაბადების წელი:", birthYear);
// console.log("გამოთვლილი ასაკი:", calculatedAge);


// 2. ლოგიკური ოპერატორები

// let age = +prompt("შეიყვანეთ თქვენი ასაკი");
// let isStudent = confirm("ხართ თუ არა სტუდენტი?");

// if (age >= 18 && age <= 25 && isStudent) {
//     console.log("თქვენ გეკუთვნით სტუდენტური ფასდაკლება");
// } else if (age < 18 || age > 25 || !isStudent) {
//     console.log("თქვენ არ გეკუთვნით სტუდენტური ფასდაკლება");
// }

// 3. Nested ლოგიკური ოპერატორები

// let amount = +prompt("შეიყვანეთ შეკვეთის თანხა");
// let promoCode = confirm("გაქვთ პრომოკოდი?");
// let discount = 0;

// if (amount > 100 && promoCode) {
//     discount = 20;
// } else if (amount > 100 && !promoCode) {
//     discount = 10;
// } else if ((amount >= 50 && amount <= 100) && promoCode) {
//     discount = 5;
// } else {
//     discount = 0;
// }

// let finalPrice = amount - (amount * discount / 100);

// console.log("ფასდაკლება:", discount + "%");
// console.log("გადასახდელი თანხა:", finalPrice + " ლარი");

// 4. If / Else

// let age = +prompt("შეიყვანეთ თქვენი ასაკი");
// let experience = +prompt("რამდენი წლის გამოცდილება გაქვთ?");
// let isVIP = confirm("გაქვთ VIP სტატუსი?");

// if (age >= 18 && experience >= 2) {
//     alert("შეგიძლიათ ტურნირში მონაწილეობა");
// } else if (age >= 18 && experience < 2) {
//     alert("შეგიძლიათ მხოლოდ დამწყებთა ტურნირში მონაწილეობა");
// } else if (age < 18 && isVIP) {
//     alert("შეგიძლიათ სპეციალურ საბავშვო ტურნირში მონაწილეობა");
// } else {
//     alert("რეგისტრაცია მიუწვდომელია");
// }

// 5. Switch - კალკულატორი

// let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
// let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი"));
// let operator = prompt("შეიყვანეთ ოპერაცია: +, -, *, /, %");

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         if (num2 === 0) {
//             result = "ნულზე გაყოფა შეუძლებელია";
//         } else {
//             result = num1 / num2;
//         }
//         break;

//     case "%":
//         if (num2 === 0) {
//             result = "ნულზე ნაშთის გამოთვლა შეუძლებელია";
//         } else {
//             result = num1 % num2;
//         }
//         break;

//     default:
//         result = "არასწორი ოპერაცია";
// }

// alert(result);
// console.log(result);

// 6. Ternary Operator

let age = +prompt("შეიყვანეთ თქვენი ასაკი");

let result = age >= 18 ? "სრულწლოვანი ხართ" : "არასრულწლოვანი ხართ";

alert(result);