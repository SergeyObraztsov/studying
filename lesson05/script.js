 'use strict';
let money;

const start = function(){
    do{
        money = prompt('Ваш месячный доход?', 20000);
        console.log('Ваш месячный доход:', money);
    }
    while(isNaN(money) || money === '' || money === null);
}

start();

let appData = {
    budget: money,
    budgetDay: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Еда, Спортзал, вуз");
        this.addExpenses = addExpenses.toLowerCase().split(',');
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){

            let expensesName = prompt('Введите обязательную статью расходов', 'Квартплата');
            let expense;
            do{
                expense = prompt('Во сколько это обойдется?', 2000);
            }
            while(expense === '' || isNaN(expense) || expense === null);
            this.expenses[expensesName] = expense;
        }
    },
    getExpensesMonth: function(){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function(){
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return this.mission / this.budgetMonth;
    },
    getStatusIncome: function(){
        if (this.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay >= 0) {
            return ('низкий уровень дохода');
        } else {
            return ('something went wrong');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log('Цель заработать ' + appData.mission + ' рублей');

if (appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData){
    if (key === 'budget'){
        console.log('Наша программа включает в себя данные: ');
    }
    console.log(key + ' - ' + appData[key]);
}