
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if ( i != 1 ) {
      string = "I am 1 strange loop.";
      array.push(string);
    }
    else {
      string = `${i} strange loops.`;
      array.push(string);
    }
  }
}
