const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('Forwards WHILE:')
let i = 0;
while(i < ingredients.length) {
	console.log(ingredients[i]);
	i++
}

// Write a for loop that prints out the contents of ingredients:
console.log('Forwards FOR:')
for (var j = 0; j < ingredients.length; j++) {
	console.log(ingredients[j]);
}



// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('Backwards FOR:')
for (var k = ingredients.length - 1; k >= 0; k--) {
	console.log(ingredients[k]);
}