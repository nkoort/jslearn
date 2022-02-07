
// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//    item.style.backgroundColor = 'blue'; 
// });

// let div = document.createElement('div'),
//     text = document.createTextNode('I am this');

// div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild('div');

// console.log(div);
// console.log(text);

let button = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// button[0].onclick = function () {
//     
// };
// button[0].onclick = function () {
//     
// };

// button[0].addEventListener('click', function(event){
//     let target = event.target;
//     console.log('Произошло событие: ' + event.type + ' на элементе - ' + target);
//     button[0].classList.toggle('active');
// });

// wrap.addEventListener('click', function(event){
//     let target = event.target;
//     console.log('Произошло событие: ' + event.type + ' на элементе - ' + target);
// });
// button[0].addEventListener('mouseenter', function() {
//  console.log('Вы навели на первую кнопку'); 
// });
link.addEventListener('mouseenter', function(event){
    link.style.color = 'red';
    // console.log('Произошло событие: ' + event.type + ' на элементе - ' + target);
});
link.addEventListener('mouseleave', function(event){
    link.style.color = 'black';
    // console.log('Произошло событие: ' + event.type + ' на элементе - ' + target);
});
link.addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Произошло событие: ' + event.type + ' на элементе - ' + target);
});

button.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('курсов убрали с элемента');
    });
});
button.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('active');
    });
});