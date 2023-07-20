// checking whether the variable entered by the user is a number using parseInt()
let enterNumber = parseInt(prompt("Enter natural number:"));

if (enterNumber >= 0) {
	let factorial = 1;
	if (enterNumber > 0)
		// computing factorial count down from the entered number
		for (let i = enterNumber; i > 1; i--)
			factorial *= i;
	document.write(`<h2>${enterNumber}! = ${factorial}</h2>`);
}
