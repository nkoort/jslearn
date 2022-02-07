let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.getElementsByClassName('day-value')[0];

let money, time;




startBtn.addEventListener('click', function (event) {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Введите ваш бюджет на месяц', '');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Укажите ваш бюджет, это обязательно', '');
    };
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    document.body.classList.add('active');
});

expensesItemBtn.addEventListener('click', function () {
    if (document.body.classList.contains('active')) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
        };
        expensesValue.textContent = sum;
        appData.expValue = sum;
    } else {
        expensesItemBtn = function (event) {
            event.preventDefault();
        };
    }

})

optionalexpensesBtn.addEventListener('click', function () {
    if (document.body.classList.contains('active')) {
        for (i = 0; i <= optionalexpensesItem.length; i++) {
            let optExp = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = optExp;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        };
    } else {
        expensesItemBtn = function (event) {
            event.preventDefault();
        };
    }
});

countBudgetBtn.addEventListener('click', function () {

    if (document.body.classList.contains('active')) {
        if (appData.budget != undefined) {

            appData.moneyPerDay = ((appData.budget - appData.expValue)/ 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Ошибка';
            };
        } else {
            daybudgetValue.textContent = 'Ошибка';
        };
    } else {
        expensesItemBtn = function (event) {
            event.preventDefault();
        };
    }
});

chooseIncome.addEventListener('change', function () {
    items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    };
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExp: function () {},
    detectDayBudget: function () {},
    detectLevel: function () {},
    ckeckSavings: function () {},
    chooseOptExpenses: function () {},
    chooseIncome: function () {}
};


// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key);
// };