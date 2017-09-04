function forLoop(in_array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      in_array.push('I am 1 strange loop.');
    } else {
      in_array.push('I am ' + i + 'strange loops.');
    }
  }
  return in_array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(in_array) {
  do {
    in_array.pop()
  } while (in_array.length > 0 && maybeTrue());
  return in_array
}


/* function forLoop2(in_array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      in_array.push(i);
    } else {
      in_array.push('apples');
    }
  }
  return in_array
}
*/
