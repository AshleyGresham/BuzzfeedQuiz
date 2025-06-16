let images = document.querySelectorAll('.questions img');
let question1 = document.getElementById('question1');
let pink = document.getElementById('pink');
let orange = document.getElementById('orange');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let purple = document.getElementById('purple');
let black = document.getElementById('black');
let question2 = document.getElementById('question2');
let protienshake = document.getElementById('protienshake');
let emptyplate = document.getElementById('emptyplate');
let coffee = document.getElementById('coffee');
let eggs = document.getElementById('eggs');
let pancakes = document.getElementById('pancakes');
let cereal = document.getElementById('cereal');
let question3 = document.getElementById('question3');
let bread = document.getElementById('bread');
let pasta = document.getElementById('pasta');
let fruit = document.getElementById('fruit');
let vegetables = document.getElementById('vegetables');
let candy = document.getElementById('candy');
let meat = document.getElementById('meat');
let questions4 = document.getElementById('questions4');
let energydrinks = document.getElementById('energydrinks');
let water = document.getElementById('water');
let starbucks = document.getElementById('starbucks');
let smoothie = document.getElementById('smoothie');
let alcohol = document.getElementById('alcohol');
let soda = document.getElementById('soda');
let question5 = document.getElementById('question5');
let city = document.getElementById('city');
let farm = document.getElementById('farm');
let snowtown = document.getElementById('snowtown');
let regulartown = document.getElementById('regulartown');
let cabin = document.getElementById('cabin');
let question6 = document.getElementById('question6');
let sunny = document.getElementById('sunny');
let cloudy = document.getElementById('cloudy');
let storm = document.getElementById('storm');
let snow = document.getElementById('snow');
let rainy = document.getElementById('rainy');
let misty = document.getElementById('misty');



let answerssubmitted = [];
//#region  fluffy cow answers
green.addEventListener('click', function(){
    answerssubmitted[0] = 1;
})
emptyplate.addEventListener('click', function(){
    answerssubmitted[1] = 1;
})
bread.addEventListener('click', function(){
    answerssubmitted[2] = 1;
})
soda.addEventListener('click', function(){
    answerssubmitted[3] = 1;
})
farm.addEventListener('click', function(){
    answerssubmitted[4] = 1;
})
sunny.addEventListener('click', function(){
    answerssubmitted[5] = 1;
})
//#endregion

//#region   silly cow answers
blue.addEventListener('click', function(){
    answerssubmitted[0] = 2;
})
yellow.addEventListener('click', function(){
    answerssubmitted[0] = 2;
})
cereal.addEventListener('click', function(){
    aanswerssubmitted[1] = 2;
})
candy.addEventListener('click', function(){
    answerssubmitted[2] = 2;
})
alcohol.addEventListener('click', function(){
    answerssubmitted[3] = 2;
})
suburbs.addEventListener('click', function(){
    answerssubmitted[4] = 2;
})
misty.addEventListener('click', function(){
    answerssubmitted[5] = 2;
})
//#endregion

//#region fancy cow answers
purple.addEventListener('click', function(){
    answerssubmitted[0] = 3;
})
coffee.addEventListener('click', function(){
    answerssubmitted[1] = 3;
})
pasta.addEventListener('click', function(){
    aanswerssubmitted[2] = 3;
})
starbucks.addEventListener('click', function(){
    answerssubmitted[3] = 3;
})
city.addEventListener('click', function(){
    answerssubmitted[4] = 3;
})
snowy.addEventListener('click', function(){
    answerssubmitted[5] = 3;
})
//#endregion

//#region strayberry cow answers
pink.addEventListener('click', function(){
    answerssubmitted[0] = 4;
})
pancakes.addEventListener('click', function(){
    answerssubmitted[1] = 4;
})
fruit.addEventListener('click', function(){
    aanswerssubmitted[2] = 4;
})
smoothie.addEventListener('click', function(){
    answerssubmitted[3] = 4;
})
beach.addEventListener('click', function(){
    answerssubmitted[4] = 4;
})
cloudy.addEventListener('click', function(){
    answerssubmitted[5] = 4;
})
//#endregion
//#region chocolate cow answers
orange.addEventListener('click', function(){
    answerssubmitted[0] = 5;
})
eggs.addEventListener('click', function(){
    answerssubmitted[1] = 5;
})
veggies.addEventListener('click', function(){
    aanswerssubmitted[2] = 5;
})
water.addEventListener('click', function(){
    answerssubmitted[3] = 5;
})
snowtown.addEventListener('click', function(){
    answerssubmitted[4] = 5;
})
rainy.addEventListener('click', function(){
    answerssubmitted[5] = 5;
})
//#endregion
//#region muscle cow answers
black.addEventListener('click', function(){
    answerssubmitted[0] = 6;
})
red.addEventListener('click', function(){
    answerssubmitted[0] = 6;
})
protienshake.addEventListener('click', function(){
    answerssubmitted[1] = 6;
})
meat.addEventListener('click', function(){
    aanswerssubmitted[2] = 6;
})
energydrinks.addEventListener('click', function(){
    answerssubmitted[3] = 6;
})
cabin.addEventListener('click', function(){
    answerssubmitted[4] = 6;
})
storm.addEventListener('click', function(){
    answerssubmitted[5] = 6;
})
//#endregion