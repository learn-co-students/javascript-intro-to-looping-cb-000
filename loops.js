function whileLoop(n)
{
  while(n > 0)
    {
      console.log(--n);
    }
  return "done";
}

function forLoop(array)
{
  for(i=0; i < 25; i++)
  {
    if(i === i)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
        "I am ${i} strange loop";
    }
  }
  return array;
}

function doWhileLoop(array)
{
  do {
    array.pop();
  } while (array.length !== 0);
  return array;
}
