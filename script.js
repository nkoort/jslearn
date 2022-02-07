let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в ормате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();
let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExp: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.money / 30).toFixed(2);
        console.log('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        };
    },
    ckeckSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('Сколько збережений?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            console.log('Доход в месяц от збережений: ' + appData.monthIncome);
        };
    },
    chooseOptExpenses: function() {
        for (i = 1; i <= 3; i++) {
            let optExp = prompt('Статья не обязательноых расходов?');
            appData.optionalExpenses[i] = optExp;
        };
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function() {
        items = ''
        while (!isNaN(items) || items == '' || items == null) {
            items = prompt('Что принесёт дополнительных доход? (Перечислить через запятую) ', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Вы ничего не забыли?'));
        appData.income.sort();
        appData.income.forEach(function(item, i, arr) {
            console.log('Способы доп. заработка: ' + (i+1) + ' - ' + item + ' (' + arr + ')');
        });
    }
}; 


for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
    // console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};
// console.log('Наша программа включает в себя данные: ' + items);