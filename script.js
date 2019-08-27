'use strict';
let mission = 160000; 
let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log("addExpenses: ", addExpenses.split(', '));
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);
let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let price1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let price2 = prompt('Во сколько это обойдется?');
let budgetMonth = money - price1 - price2
console.log('budgetMonth: ', budgetMonth);
let budgetDay = budgetMonth/30 
Math.floor(budgetDay)
let happyness = mission / budgetMonth
Math.ceil(happyness)
if (budgetDay >= 800) console.log('Высокий уровень дохода');
else if (budgetDay >= 300) console.log('Средний уровень дохода');
else if (budgetDay >= 0) console.log('низкий уровень дохода');
else console.log('something went wrong');