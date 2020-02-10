for (let i = 100; i <= 200; i++) 
{
  output = '';
  divisible = false;

  if (i % 3 === 0) 
  {
    output += 'Loopy'
    divisible = true;
  }

  if (i % 4 === 0)
  {
    output += 'Lighthouse'
    divisible = true;
  }

  divisible ? console.log(output) : console.log(i);

}