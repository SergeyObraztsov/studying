'use strict';
let hours = new Date().getHours();
let day = new Date().getDay();

if(hours >= 0 && hours < 4){
    console.log('Доброй ночи');
} else if (hours >= 4 && hours < 12){
    console.log('Доброе утро');
} else if (hours >= 12 && hours < 17){
    console.log('Добрый день');
} else if (hours >= 17 && hours < 24){
    console.log('Добрый вечер');
}
switch (day){
    case 0:
        console.log('Сегодня: воскресенье');
        break;
    case 1:
        console.log('Сегодня: понедельник');
        break;
    case 2:
        console.log('Сегодня: вторник');
        break;
    case 3:
        console.log('Сегодня: среда');
        break;
    case 4:
        console.log('Сегодня: четверг');
        break;
    case 5:
        console.log('Сегодня: пятница');
        break;
    case 6:
        console.log('Сегодня: суббота');
        break;
}


