let enterNumber = prompt("Enter natural number:");
// checking whether the variable entered by the user is a number using parseInt()
let parsedNumber = parseInt(enterNumber);

if (parsedNumber >= 0) {
	let factorial = 1;

	if (parsedNumber > 0) {
		// computing factorial count down from the entered number
		for (let i = parsedNumber; i > 1; i--) {
			factorial *= i;
		}
	}
	document.write(`<h2>${parsedNumber}! = ${factorial}</h2>`);
}