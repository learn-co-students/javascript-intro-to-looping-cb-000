function forLoop(array){

  for (var i = 0; i < 25; i++) {
    if (i<=1){
      array.push("I am " + i + " strange loop.");
    } else {
      array.push("I am " + i + " strange loops.");
    }

  }
  return array;
}


function whileLoop(n) {
	while (n > 0) {
		console.log(n);
    n-=1
	}

	return 'done';
}


function doWhileLoop(array) {

  var i = 0;

  do {
    console.log('array.length = ' + array.length + ' and i = ' + i);
    array = array.slice(1);
    i+=1
  } while (array.length > 0 && i < 5);

  return array;


}
