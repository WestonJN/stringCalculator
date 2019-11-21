class stringCalculator{

    negatives(string) {
		let str = '';
		let numbers = string.split(/\D/);

		for (var i = 0; i < string.length; i++) {
			if (string[i] === '-' && !isNaN(string[i+1])) {
				str += numbers[i+1] +' ';
			}
		}

		return str;
	}

    add(numbers) {

		let results = 0;
		let negatives = this.negatives(numbers);

		numbers = numbers.split(/\D/);

		for (let i = 0; i < numbers.length; i++) {
			
			let number = parseInt(numbers[i]); 
				
		
		 	if (negatives) {
		 		throw 'Negative not allowed: -'+ negatives;
			}

			
		 	if (number >= 1000) {
		 	  number = 0;
			}
			
		 	if (number) {
		 		
				results += number;
			}
		}

		return results;
	}
      
}


let calculator = new stringCalculator();
console.log(calculator.add('//[*][%]\n1*2%3'));
console.log(calculator.add('-5,-2'));
 module.exports = {stringCalculator}
