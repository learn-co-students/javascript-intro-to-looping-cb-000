function forLoop(ray) {
  var message
  for( let i = 0; i < 25 ; i++) {
    if (i === 1) {message = "I am 1 strange loop."}
    else {message = `I am ${i } strange loops.`}
    ray.push(message)
  }
  return ray
}

function whileLoop(number) {
  var number1 = number - 1
  while (number1 > -1) {
    if (number1 > -1) {console.log(`${number1}`)}
    number1 -= 1 ;
  }
  return 'done'
}
var p = 0;
function incrementVariable() {
  p = p + 1;
}

function doWhileLoop(array) {
  array.length = 1
  return array
}
