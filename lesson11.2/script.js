'use strict';
const start = document.getElementById('start'),
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
    incomeItems = document.querySelectorAll('.income-items'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
    
class AppData{
    constructor(){
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
    }
    


    start(){
        const inputs = document.querySelectorAll('.data input[type=text]');
        inputs.forEach(function(item){
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
        cancel.addEventListener('click', this.reset); 

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddIncome();
        this.getAddExpenses();
        this.getTargetMonth();
        this.getInfoDeposit();
        this.getBudget();
        this.showResult();
        
    }
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
    }
    showResult(){
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalEnxpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

        periodSelect.addEventListener('change', function(){
            incomePeriodValue.value = _this.calcPeriod();
        });

    }
    addExpensesBlock(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        let expensesItems2 = document.querySelectorAll('.expenses-items');
        if (expensesItems2.length === 3){
            expensesPlus.style.display = 'none';
        }
        cloneExpensesItem.querySelectorAll('input').forEach(function(item){
            item.value = '';
        });
    }
    addIncomeBlock(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        cloneIncomeItem.querySelectorAll('input').forEach(function(item){
            item.value = '';
        });
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        let incomeItems2 = document.querySelectorAll('.income-items');
        if (incomeItems2.length ===3){
            incomePlus.style.display = 'none';
        } 
        
    }
    getExpenses(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
        }, this);
    }
    getIncome(){
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
    }
    getAddExpenses(){
        let addExpenses = additionalEnxpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    }
    getAddIncome(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }, this);
    }
    getExpensesMonth(){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    }
    getBudget(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = this.budgetMonth / 30; 
    }
    getTargetMonth(){
        return targetAmount.value / this.budgetMonth;
    }
    getStatusIncome(){
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
    getInfoDeposit(){
        if (this.deposit){
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value; 
        }
    }
    calcPeriod(){
        return this.budgetMonth * periodSelect.value; 
    }
    eventListener(){
        start.addEventListener('click', this.start.bind(this));
        expensesPlus.addEventListener('click', this.addExpensesBlock);
        incomePlus.addEventListener('click', this.addIncomeBlock);
        salaryAmount.addEventListener('keyup', this.check);

        depositCheck.addEventListener('change',() =>{
            if(depositCheck.checked){
                depositBank.style.display = 'inline-block';
                depositAmount.style.display = 'inline-block';
                this.deposit = 'true';
                depositBank.addEventListener('change', function(){
                    let selectIndex = this.options[this.selectedIndex].value;
                    if(selectIndex === 'other'){
                        depositPercent.style.display = 'inline-block';
                        depositPercent.value = '';
                    } else {
                        depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
                });
            } else{
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                this.deposit = 'false';
            }
        });

        periodSelect.addEventListener('input', function(){
            document.querySelector('.period-amount').textContent = periodSelect.value;
        });

        start.disabled = true;
        salaryAmount.addEventListener('input', function(){
            if (salaryAmount.value.trim() === ''){
                start.disabled = true;
            } else {
                start.disabled = false;
            } 
        });
    }
}

const appData = new AppData();
appData.eventListener();


