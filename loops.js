
function forLoop(array) {
  for(var i = 0; i < 25; i++) {
      array.push("I am " + i + "strange loop"+i)
  }
  return array
}

function whileLoop(n) {
  let count = n;

  while(count > 0) {
    console.log(--count)
  }

  var output = "done";
  return output

}

function doWhileLoop(array){
  function maybeTrue () {
    return array.length > 0
  }

  do {
    console.log('doo-bee-doo-bee-doo')
    array.pop();
  } while (maybeTrue());

return array
}
