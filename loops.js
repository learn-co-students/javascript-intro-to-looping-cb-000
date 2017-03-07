function forLoop(array) {
    for (var i = 0; i < 25; i++) {
      if (i == 1) {
        var newItem =  ( "I am " + i + " strange loop" );
        array.push(newItem)
      }
      else {
        var newItem =  ( "I am " + i + " strange loops");
        array.push(newItem)
      }
    }
    return array
  }


function whileLoop(n){

  while (n > 0){
    console.log (--n)
  }
  return('done')
}



function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    new_array = array.pop
  } while (maybeTrue());
  return new_array
}
