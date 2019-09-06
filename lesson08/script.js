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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        if (confirm('есть ли у вас дополнительный заработок?')){
            let incomeName = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            this.income[incomeName] = cashIncome;
        }

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
    },
    getInfoDeposit: function(){
        if (this.deposit){
            this.percentDeposit = prompt('Какой годовой процент?', '10');
            this.moneyDeposit = prompt('Какая сумма заложена ?', 10000); 
        }
    },
    calcSaveMoney: function(){
        return this.budgetMonth * this.period; 
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();


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