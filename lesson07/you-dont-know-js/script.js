'use strict';
let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
books[0].insertBefore(book[1], book[0]);
let book6 = books[0].replaceChild(book[4], book[2]);
books[0].appendChild(book6);
let image = document.querySelector('body');
image.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
let head = document.querySelectorAll('a');
head[2].innerHTML = 'Книга 3. this и Прототипы Объектов';
let adv = document.querySelector('.adv');
adv.remove();

let content = document.querySelectorAll('ul');
let glava = document.querySelectorAll('li');
content[1].insertBefore(glava[14], glava[10]);
content[1].insertBefore(glava[12], glava[14]);
content[1].insertBefore(glava[8], glava[16]);

content[4].insertBefore(glava[45], glava[39]);
content[4].insertBefore(glava[38], glava[42]);
content[4].insertBefore(glava[41], glava[44]);

let cloneGlava = glava[55].cloneNode(true);
cloneGlava.textContent = 'Глава 8: За пределами ES6';
content[5].appendChild(cloneGlava);
content[5].insertBefore(cloneGlava, glava[56]);
