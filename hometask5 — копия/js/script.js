'use strict';

let menuList = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    divLi = document.createElement('li'),
    body = document.getElementsByTagName('body'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptApple = document.getElementById('prompt');

menuList.insertBefore(menuItem[2], menuItem[1]);
divLi.classList.add('menu-item');
divLi.textContent = 'Пятый элемент';
menuList.appendChild(divLi);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

title.textContent = 'Мы продаёт только подлинную технику Apple';
adv.remove();

let yourOpinion = prompt("Ваше отношение к технике Apple?"); 
promptApple.textContent = yourOpinion;
