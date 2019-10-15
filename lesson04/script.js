'use strict';
let money;

const start = function(){
    do{
        console.log('privet');
        money = prompt('Ваш месячный доход?', 20000);
        console.log('Ваш месячный доход:', money);
    }
    while(isNaN(money) || money === '' || money === null);
}

start();

let mission = 16000,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Еда, Спортзал, вуз"),
    deposit = confirm('Есть ли у вас депозит в банке?');



let expenses_name1,
    expenses_name2;

const getExpensesMonth = function(){
    let sum = 0;
    for (let i = 0; i < 2; i++){
        if (i === 0){
            expenses_name1 = prompt('Введите обязательную статью расходов', 'Квартплата');
        }
        if (i === 1){
            expenses_name2 = prompt('Введите обязательную статью расходов', 'Бензин');
        }
        let expenses;
        do{
            expenses = prompt('Во сколько это обойдется?');
        }
        while(expenses === '' || isNaN(expenses) || expenses === null);
        sum += +expenses
    }
    return sum;
}

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function(){
    return money - expensesAmount;
}
let accumulatedMonth = getAccumulatedMonth();

let budgetDay;

if ((accumulatedMonth / 30) < 0){
    budgetDay = 'Что-то пошло не так';
} else{
    budgetDay = Math.floor(accumulatedMonth / 30);
}

let detStatusIncome = function(){
    if (accumulatedMonth >= 800) {
        return ('Высокий уровень дохода');
    } else if (accumulatedMonth >= 300) {
        return ('Средний уровень дохода');
    } else if (accumulatedMonth >= 0) {
        return ('низкий уровень дохода');
    } else {
        return ('something went wrong');
    }
}


const showTypeof = function(data){
    console.log(data, typeof(data));
}

const getTargetMonth = function(){
    if (Math.ceil(mission / accumulatedMonth) > 0){
        return ('Цель будет достигнута за ' + Math.ceil(mission / accumulatedMonth) + ' месяцев');
        
    } else {
        return ('Цель не будет достигнута');
    }
}
console.log('Цель заработать ' + mission + ' рублей');
console.log(getTargetMonth());