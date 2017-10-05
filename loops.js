var array =[];
function forLoop(array){
  for (var i = 0; i < 25; i++){
   array.push(`I am ${i} strange loops.`);
  }
   return array;
}


function whileLoop(n){
  let countdown = n;

  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
    return array;
  } while ( array.length > 0 && maybeTrue());
}
