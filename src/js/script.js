'use strict'

const start = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesInputs = document.getElementsByClassName('expenses-item'),
    btns = document.getElementsByTagName('button'),
    confButtons = [],
    calcButtons = [],
    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML == 'Утвердить') {
        confButtons.push(btns[i]);
    }
    if (btns[i].innerHTML == 'Рассчитать') {
        calcButtons.push(btns[i]);
    }
}