
var array = []
function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(i === 1? "I am 1 strange loop." : `I am ${i} strange loops.`);
  } return array;
}


var number = 10;
function whileLoop(number){
  while (number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}



var myArray = ["a","b","c"]
var i = 0;
function doWhileLoop(array){
  do{
    array.splice (i);
  } while(array.length > 0){
      function incrementVariable() {
      i = i + 1;}
    } return array;
 }
