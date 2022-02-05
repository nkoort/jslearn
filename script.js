let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в ормате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}


let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}; 

function chooseExp() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько это обойдётся?');
        if ( (typeof(a))  === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else if (appData.expenses == 'OK') {
            break
        } else {
            a = 'Другие расходы';
            b = 'Отсутствуют';
            appData.expenses[a] = b;
            break
        }
    
    };
}


function detectDayBudget() {
    appData.moneyPerDay = (appData.money / 30).toFixed(2);
    console.log('Ежедневный бюджет: ' + appData.moneyPerDay);
}
function detectLevel () {
    if (appData.moneyPerDay < 100) {
         console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
           console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
           console.log('Высокий уровень достатка');
    } else {
          console.log('Ошибка');
    };
};


function ckeckSavings() {
    if(appData.savings == true) {
        let save = +prompt('Сколько збережений?'),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        console.log('Доход в месяц от збережений: ' + appData.monthIncome);
    };
};


function chooseOptExpenses() {
    for (i = 1; i <= 3; i++) {
        let optExp = prompt('Статья не обязательноых расходов?');
        appData.optionalExpenses[i] = optExp;
    };
    console.log(appData.optionalExpenses);
}

start();
chooseExp();
detectDayBudget();
detectLevel();
ckeckSavings();
chooseOptExpenses();