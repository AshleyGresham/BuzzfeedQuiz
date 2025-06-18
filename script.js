//#region  Variables
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
let count1 = 0; // fluffy cow
let count2 = 0; // silly cow
let count3 = 0; // fancy cow
let count4 = 0; // strawberry cow
let count5 = 0; // chocolate cow
let count6 = 0; // muscle cow
let submitbutton = document.getElementById('submit');
let resultsimage = document.getElementById('resultsimage');
let resultstext = document.getElementById('resulttext');
let colorButtons = document.querySelector('colorButtons');
//#endregion


function handleSelection(element, containerClass) {
    // Remove selected class from all elements in the same container
    let container = document.querySelector('.' + containerClass);
    let elements = container.querySelectorAll('button, img');
    elements.forEach(el => el.classList.remove('selected'));
    
    // Add selected class to clicked element
    element.classList.add('selected');
}
let answerssubmitted = [];
//#region  fluffy cow answers
green.addEventListener('click', function(){
    answerssubmitted[0] = 1;
    handleSelection(this, 'colorbuttons');
})
emptyplate.addEventListener('click', function(){
    answerssubmitted[1] = 1;
    handleSelection(this, 'breakfastpictures');
})
bread.addEventListener('click', function(){
    answerssubmitted[2] = 1;
    handleSelection(this, 'foodpictures');
})
soda.addEventListener('click', function(){
    answerssubmitted[3] = 1;
    handleSelection(this, 'drinkpictures');
})
farm.addEventListener('click', function(){
    answerssubmitted[4] = 1;
    handleSelection(this, 'livepictures');
})
sunny.addEventListener('click', function(){
    answerssubmitted[5] = 1;
    handleSelection(this, 'weatherpictures');
})
//#endregion

//#region   silly cow answers
blue.addEventListener('click', function(){
    answerssubmitted[0] = 2;
    handleSelection(this, 'colorbuttons');
})
yellow.addEventListener('click', function(){
    answerssubmitted[0] = 2;
    handleSelection(this, 'colorbuttons');
})
cereal.addEventListener('click', function(){
    answerssubmitted[1] = 2;
    handleSelection(this, 'breakfastpictures');
})
candy.addEventListener('click', function(){
    answerssubmitted[2] = 2;
    handleSelection(this, 'foodpictures');
})
alcohol.addEventListener('click', function(){
    answerssubmitted[3] = 2;
    handleSelection(this, 'drinkpictures');
})
regulartown.addEventListener('click', function(){
    answerssubmitted[4] = 2;
    handleSelection(this, 'livepictures');
})
misty.addEventListener('click', function(){
    answerssubmitted[5] = 2;
    handleSelection(this, 'weatherpictures');
})
//#endregion

//#region fancy cow answers
purple.addEventListener('click', function(){
    answerssubmitted[0] = 3;
    handleSelection(this, 'colorbuttons');
})
coffee.addEventListener('click', function(){
    answerssubmitted[1] = 3;
    handleSelection(this, 'breakfastpictures');
})
pasta.addEventListener('click', function(){
    aanswerssubmitted[2] = 3;
    handleSelection(this, 'foodpictures');
})
starbucks.addEventListener('click', function(){
    answerssubmitted[3] = 3;
    handleSelection(this, 'drinkpictures');
})
city.addEventListener('click', function(){
    answerssubmitted[4] = 3;
    handleSelection(this, 'livepictures');
})
snow.addEventListener('click', function(){
    answerssubmitted[5] = 3;
    handleSelection(this, 'weatherpictures');
})
//#endregion

//#region strayberry cow answers
pink.addEventListener('click', function(){
    answerssubmitted[0] = 4;
    handleSelection(this, 'colorbuttons');
})
pancakes.addEventListener('click', function(){
    answerssubmitted[1] = 4;
    handleSelection(this, 'breakfastpictures');
})
fruit.addEventListener('click', function(){
    aanswerssubmitted[2] = 4;
    handleSelection(this, 'foodpictures');
})
smoothie.addEventListener('click', function(){
    answerssubmitted[3] = 4;
    handleSelection(this, 'drinkpictures');
})
beachhouse.addEventListener('click', function(){
    answerssubmitted[4] = 4;
    handleSelection(this, 'livepictures');
})
cloudy.addEventListener('click', function(){
    answerssubmitted[5] = 4;
    handleSelection(this, 'weatherpictures');
})
//#endregion
//#region chocolate cow answers
orange.addEventListener('click', function(){
    answerssubmitted[0] = 5;
    handleSelection(this, 'colorbuttons');
})
eggs.addEventListener('click', function(){
    answerssubmitted[1] = 5;
    handleSelection(this, 'breakfastpictures');
})
vegetables.addEventListener('click', function(){
    aanswerssubmitted[2] = 5;
    handleSelection(this, 'foodpictures');
})
water.addEventListener('click', function(){
    answerssubmitted[3] = 5;
    handleSelection(this, 'drinkpictures');
})
snowtown.addEventListener('click', function(){
    answerssubmitted[4] = 5;
    handleSelection(this, 'livepictures');
})
rainy.addEventListener('click', function(){
    answerssubmitted[5] = 5;
    handleSelection(this, 'weatherpictures');
})
//#endregion
//#region muscle cow answers
black.addEventListener('click', function(){
    answerssubmitted[0] = 6;
    handleSelection(this, 'colorbuttons');
})
red.addEventListener('click', function(){
    answerssubmitted[0] = 6;
    handleSelection(this, 'colorbuttons');
})
protienshake.addEventListener('click', function(){
    answerssubmitted[1] = 6;
    handleSelection(this, 'breakfastpictures');
})
meat.addEventListener('click', function(){
    answerssubmitted[2] = 6;
    handleSelection(this, 'foodpictures');
})
energydrinks.addEventListener('click', function(){
    answerssubmitted[3] = 6;
    handleSelection(this, 'drinkpictures');
})
cabin.addEventListener('click', function(){
    answerssubmitted[4] = 6;
    handleSelection(this, 'livepictures');
})
storm.addEventListener('click', function(){
    answerssubmitted[5] = 6;
    handleSelection(this, 'weatherpictures');
})
//#endregion
 //#region Results
submitbutton.addEventListener('click', function(){
    if(answerssubmitted.length < 6) {
        resultstext.textContent = "Please answer all questions first!";
        return;
    }
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    countAnswers();
    determineCow();
})
function countAnswers() {

    for(let i = 0; i < answerssubmitted.length; i++) {
        if(answerssubmitted[i] === 1) count1++;
        if(answerssubmitted[i] === 2) count2++;
        if(answerssubmitted[i] === 3) count3++;
        if(answerssubmitted[i] === 4) count4++;
        if(answerssubmitted[i] === 5) count5++;
        if(answerssubmitted[i] === 6) count6++;
    }
}
function determineCow() {
    if (count1 >= 3) {
        resultsimage.src = "https://i.pinimg.com/736x/07/6d/8c/076d8cdf8d9587e18148736fa6843006.jpg";
        resultstext.textContent = "You got Fluffy Cow!";
    } else if (count2 >= 3) {
        resultsimage.src = "https://www.shutterstock.com/image-photo/closeup-brown-white-cow-standing-600nw-2379760687.jpg";
        resultstext.textContent = "You got Silly Cow!";
    } else if (count3 >= 3) {
        resultsimage.src = "https://64.media.tumblr.com/a5dfbc37843073bedc6757f20875780b/da376292d3c975ff-53/s640x960/a070d6ed479d01be761df554518913a6b811638e.jpg";
        resultstext.textContent = "You got Fancy Cow!";
    } else if (count4 >= 3) {
        resultsimage.src = "https://i.pinimg.com/736x/40/14/fd/4014fdbdad7f03d2dd63a39b94fcbd18.jpg";
        resultstext.textContent = "You got Strawberry Cow!";
    } else if (count5 >= 3) {
        resultsimage.src = "https://www.abelandcole.co.uk/Blog/images/default-source/acblogimages/Suppliers/brown-cow/325a4868.jpg?sfvrsn=d779a9cf_2";
        resultstext.textContent = "You got Chocolate Cow!";
    } else if (count6 >= 3) {
        resultsimage.src = "https://as2.ftcdn.net/jpg/02/47/58/29/1000_F_247582946_tkNCuRODs6913HrFTUpWQxK2siVRKA14.jpg";
        resultstext.textContent = "You got Muscle Cow!";
    } else {
        // Default case if no clear winner
        resultsimage.src = "https://static.vecteezy.com/system/resources/thumbnails/049/722/449/small/a-funny-spotted-black-and-white-cow-wearing-dark-sunglasses-on-a-sunny-day-photo.jpg";
        resultstext.textContent = "You got the Smart Cow!";
    }
}
//#endregion
