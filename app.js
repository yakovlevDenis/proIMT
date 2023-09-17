document.write('<h2>Разчитаем Индекс Массы Тела(ИМТ): </h2>');



let weightHuman = prompt('Введите ваш вес, кг');
document.write('Ваш вес ', weightHuman, ' кг');
document.write('<br>');


let growthHuman = prompt('Введите ваш рост, см');
document.write('Ваш рост ', growthHuman, ' см');
document.write('<br>');
document.write('<br>');


let IMT;

IMT = weightHuman / (Math.pow(growthHuman, 2))*10000;

document.write('Ваш Индекс Массы Тела(ИМТ): ', IMT.toPrecision(2));
let IMTEnd = IMT.toPrecision(2)
document.write('<br>');


document.write('Если у тебя ИМТ - ', IMTEnd, IMTEnd > 26 ? ' - то Ты боди позитивный' : ' - то у тебя всё нормально');

