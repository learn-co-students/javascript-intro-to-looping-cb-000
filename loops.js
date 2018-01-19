function forLoop(array) {
  for (let i = 1; i<26; i++) {
  array.push(`I am ${i} stange loops.`);
}
return array
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
do {
  array.pop();
} while (array.length > 0);
return array
}
