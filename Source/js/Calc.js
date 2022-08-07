/*
let sum = 0, days = 0;

function Calc(){
    
let site = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Корпоративный сайт 3 - Интернет-магазин");
    if( site == "1"){
    sum += 1000;
    days += 1;    
}else if(site == "2"){
    sum += 3000;
    days += 5;
}else if(site == "3"){
    sum += 5000;
    days += 10;
}else {
    alert("Вы ввели что-то не то");
    Calc();
}
    
let design = prompt("Какой тип дизайна? 1 - Шаблонный 2 - Уникальный 3 - WOW-Дизайн");
    if(design == "1"){
        sum += 1500;
        days += 1;
    }else if(design == "2"){
        sum += 3000;
        days += 1;
    }else if(design == "3"){
        sum += 5000;
        days += 2;
    }else {
        alert("Вы ввели что-то не то");
        Calc();
    }
    
let adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2 - Только мобильный 3 - ПК + мобильный");
  if(adaptive == "1"){
        sum += 1500;
        days += 1;
    }else if(adaptive == "2"){
        sum += 3000;
        days += 1;
    }else if(adaptive == "3"){
        sum += 5000;
        days += 2;
    }else {
        alert("Вы ввели что-то не то");
        Calc();
    }

    
alert("Сроки: "+ days + " Стоимость: "+ sum);    
}
Calc();
*/


let site, design, adaptive;

let calculator = {
    price: [
        [500, 1000, 1500],
        [1000, 1500, 2000],
        [1500, 2500, 5000],
    ],
    days: [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
    ],
    
    run(typeSite, typeDesign, typeAdaptive){
    
    let sum = parseInt(calculator.price[0][typeSite-1]) + parseInt(calculator.price[1][typeDesign-1]) + parseInt(calculator.price[2][typeAdaptive-1]);
    
    let day = parseInt(calculator.days[0][typeSite-1]) + parseInt(calculator.days[1][typeDesign-1]) + parseInt(calculator.days[2][typeAdaptive-1]);
    
    alert("Сроки: "+ day + " Стоимость: "+ sum);
   }
}

function getAnswers(){
 site = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Корпоративный сайт 3 - Интернет-магазин");

    if(site != 1 && site != 2 && site != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    
 design = prompt("Какой тип дизайна? 1 - Шаблонный 2 - Уникальный 3 - WOW-Дизайн");

    if(design != 1 && design != 2 && design != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    
 adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2 - Только мобильный 3 - ПК + мобильный");
    
    if(adaptive != 1 && adaptive != 2 && adaptive != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptive);
}

getAnswers();








