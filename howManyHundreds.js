function howManyHundreds(num) {
  let count = 0;
  while (num >= 100) {
    num -= 100;
    count += 1
  }
  return count; 
}

howManyHundreds(697);