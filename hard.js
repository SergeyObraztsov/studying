let lang = prompt('Ввведите язык');
if (lang === 'ru'){
    console.log('Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье');
} else if (lang === 'en'){
    console.log('Monday', 'Thuesday','Wednesday','Thursday','Friday','Suturday','Sunday');
} else {
    console.log("something went wrong");
}
switch (lang){
    case 'ru':
        console.log('Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Thuesday','Wednesday','Thursday','Friday','Suturday','Sunday');
        break;
    default:
        console.log("something went wrong");
}