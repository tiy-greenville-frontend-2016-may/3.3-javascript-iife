(function(){
  'use strict';

  var colorMixerAmazing = function(color1, color2, color3){
    var newColor;
    newColor = ('#' + color1 + color2 + color3).reverse();
    return newColor;
  };

  var container = colorMixerAmazing('DD', 'DD', '1A');

  document.body.style.backgroundColor = container;


  /* Challenge Functions 1 */
  var addNumbers = function(numberA, numberB) {
      return numberA + numberB;
  }

  var twoPlusTwo = addNumbers(2, 3);

  console.log(twoPlusTwo);

}());

(function(){

  var myNumber = 5;

  console.log('myNumber 1', myNumber);

  function showNumberInLog(){
    var newNumber = 10;
    newNumber += 10;

    myNumber += 20;

    console.log('showNumberInLog:myNumber', myNumber);
    console.log('showNumberInLog:newNumber', newNumber);

    return newNumber;
  }

  showNumberInLog();

  console.log('myNumber 2', myNumber);

}());

var addTwo = function(numberToAdd){
  return 2 + numberToAdd;
};


console.log(addTwo(4));

function doSomething(doThis, withThis){
  return doThis(withThis);
}

console.log(doSomething(addTwo, 3));

console.log(
  doSomething(function(numberToAdd){
    return 3 + numberToAdd;
  }, 3)
);
