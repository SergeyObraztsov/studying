let money = 100; 
let income = 'Закладки';
let addExpenses = 'Квартира, машина, учеба';
let deposit = true;
let mission = 16000; 
let period = 4;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
let myArr = addExpenses.toLowerCase().split();
console.log(myArr);
let budgetDay = money/30 
console.log(budgetDay, money%30);
