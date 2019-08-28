'use strict';

let mission = 160000; 
let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let price1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let price2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - price1 - price2

let budgetDay = budgetMonth / 30;
Math.floor(budgetDay)

let happyness = mission / budgetMonth
Math.ceil(happyness)

let detStatusIncome = function(){
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay >= 300) {
        return ('Средний уровень дохода');
    } else if (budgetDay >= 0) {
        return ('низкий уровень дохода');
    } else {
        return ('something went wrong');
    }
}


const showTypeof = function(data){
    console.log(data, typeof(data));
}

const getStatusIncome = function(){

}

const getExpensesMonth = function(){
    return (price1 + price2);
}

const getAccumulatedMonth = function(){
    var accumulatedMonth = money - price1 - price2
    return (money - price1 - price2);
}

const getTargetMonth = function(){
    return (Math.floor(mission / accumulatedMonth));
}
console.log(getExpensesMonth());
console.log(getAccumulatedMonth());