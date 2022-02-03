let money = prompt('Ваш бюджет на месяц?', '');

let time = prompt('Введите дату в ормате YYYY-MM-DD');
let quest1 = prompt('Введите обязательную статью расходов в этом месяце 1');
let price1 = prompt('1.Во сколько это обойдётся?');
let quest2 = prompt('Введите обязательную статью расходов в этом месяце 2');
let price2 = prompt('2.Во сколько это обойдётся?');

let expenses = {
    [quest1]: price1,
    [quest2]: price2
};
let appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: '',
    income: '',
    savings: false
}; 

let budgetForDay = (Number(appData.money)  + Number(price1) + Number(price2)) / 30;

alert(budgetForDay);
