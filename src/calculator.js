class stringCalculator{
   
    negatives(string) {
		let num = '';
		let numbers = string.split(/\D/);

		for (var i = 0; i < string.length; i++) {
			if (string[i] == '-' && !isNaN(string[i+1])) {
			 num += numbers[i+1] +' ';
			}
		}

		return num;
	}

    
	add(numbers) {

		let results = 0;
		let negatives = this.negatives(numbers);

		numbers = numbers.split(/\D/);

		for (var i = 0; i < numbers.length; i++) {
			
			let number = parseInt(numbers[i]); 

			
		 	if (negatives) {
		 		throw('Negative not allowed: -' + negatives);
			}

			
		 	if (number > 1000) {
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
console.log(calculator.add(''));
console.log(calculator.add('-5'));
console.log(calculator.add('1000,3'));
console.log(calculator.add('1\n2\n3'))
 module.exports = {stringCalculator}
