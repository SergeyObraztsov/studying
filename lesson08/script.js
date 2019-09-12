'use strict';
let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    polya = document.querySelectorAll(".result-additional_income"),
    budgetMonthValue = document.querySelector(".budget_month-value"),
    budgetDayValue = document.querySelector(".budget_day-value"),
    expensesMonthValue = document.querySelector(".expenses_month-value"),
    additionalIncomeValue = document.querySelector(".additional_income-value"),
    additionalEnxpensesValue = document.querySelector(".additional_expenses-value"),
    additionalEnxpensesItem = document.querySelector('.additional_expenses-item'),
    incomePeriodValue = document.querySelector(".income_period-value"),
    targetMonthValue = document.querySelector(".target_month-value"),
    salaryAmount = document.querySelector(".salary-amount"),
    incomeTitle = document.querySelector(".income-title"),
    expensesTitle = document.querySelector(".expenses-title"),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector(".additional_expenses"),
    periodSelect = document.querySelector(".period-select"),
    periodAmount = document.querySelector('.period-amount'),
    targetAmount = document.querySelector(".target-amount"),
    incomeItems = document.querySelectorAll('.income-items');

let appData = {
    budget: 0,
    budgetDay: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
        let inputs = document.querySelectorAll('.data input[type=text]');
        inputs.forEach(function(item){
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
        cancel.addEventListener('click', this.reset)
        // expensesPlus.setAttribute('disabled', 'disabled');
        // incomePlus.setAttribute('disabled', 'disabled');
        

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddIncome();
        this.getAddExpenses();
        this.getTargetMonth();
        this.getBudget();
        this.showResult();
        
        // appData.getInfoDeposit();
    },
    reset(){
        this.budget = 0;
        this.budgetDay = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        let inputs = document.querySelectorAll('.data input[type=text]');
        inputs.forEach(function(item){
            item.disabled = false;
        });
        inputs = document.querySelectorAll('input[type=text]');
        inputs.forEach(function(item){
            item.value = '';
        });
        start.style.display = 'block';
        cancel.style.display = 'none';
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalEnxpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

        periodSelect.addEventListener('change', function(){
            incomePeriodValue.value = appData.calcPeriod();
        });

    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
        cloneExpensesItem.querySelectorAll('input').forEach(function(item){
            item.value = '';
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        cloneIncomeItem.querySelectorAll('input').forEach(function(item){
            item.value = '';
        });
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length ===3){
            incomePlus.style.display = 'none';
        } 
        
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
              let itemExpenses = item.querySelector('.expenses-title').value;
              let cashExpenses = item.querySelector('.expenses-amount').value;
              if(itemExpenses !== '' && cashExpenses !== ''){
                  this.expenses[itemExpenses] = cashExpenses;
              }
        }, this);
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome;
            }
        }, this);
        for (let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalEnxpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }, this);
    },
    getExpensesMonth: function(){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30; 
    },
    getTargetMonth: function(){
        return targetAmount.value / this.budgetMonth;
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
    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value; 
    }
};
start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
salaryAmount.addEventListener('keyup', appData.check);
periodSelect.addEventListener('input', function(){
    document.querySelector('.period-amount').textContent = periodSelect.value;
});
// cancel.addEventListener('click', appData.reset.bind(appData));
start.disabled = true;
salaryAmount.addEventListener('input', function(){
    if (salaryAmount.value.trim() === ''){
        start.disabled = true;
    } else {
        start.disabled = false;
    } 
});

