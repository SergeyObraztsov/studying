'use strict';
// Создание переменных времени
const hours = new Date().getHours(),
    day = new Date().getDay(),
    time = new Date().toLocaleTimeString('en'),
    date = new Date().getTime(),
    newYear = new Date("1 january 2020").getTime(),
    daysToNewYear = Math.floor((newYear-date)/60/60/24/1000);

// Создание четырех параграфов
const p1 = document.createElement('p'),
    p2 = document.createElement('p'),
    p3 = document.createElement('p'),
    p4 = document.createElement('p');

// Проверка времени суток
if(hours >= 0 && hours < 4){
    p1.textContent = 'Доброй ночи';
} else if (hours >= 4 && hours < 12){
    p1.textContent = 'Доброе утро';
} else if (hours >= 12 && hours < 17){
    p1.textContent = 'Добрый день';
} else if (hours >= 17 && hours < 24){
    p1.textContent = 'Добрый вечер';
}
// Проверка дня недели
switch (day){
    case 0:
        p2.textContent = 'Сегодня: воскресенье';
        break;
    case 1:
        p2.textContent = 'Сегодня: понедельник';
        break;
    case 2:
        p2.textContent = 'Сегодня: вторник';
        break;
    case 3:
        p2.textContent = 'Сегодня: среда';
        break;
    case 4:
        p2.textContent = 'Сегодня: четверг';
        break;
    case 5:
        p2.textContent = 'Сегодня: пятница';
        break;
    case 6:
        p2.textContent = 'Сегодня: суббота';
        break;
}
// Вывод информации на страницу
p3.textContent = `Текущее время:${time}`;
p4.textContent = `До нового года осталось ${daysToNewYear} дней`;
document.body.append(p1);
document.body.append(p2);
document.body.append(p3);
document.body.append(p4);




