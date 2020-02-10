function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}


function buildTriangle(num) {
  let triangle = '';
  for (let i = 1; i <= num; num++)
  {
     triangle += makeLine(i);
  }
  return triangle;
}

let triangle = buildTriangle(5);
console.log(triangle);