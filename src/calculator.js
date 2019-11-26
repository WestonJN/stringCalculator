class stringCalculator{

    negatives(string) {
		let str = '';
		let numbers = string.split(',');

		for (var i = 0; i < numbers.length; i++) {
			if (numbers[i][0] == '-') {
				str += numbers[i] +' ';
			}
		}

		return str;
	}

    add(numbers) {

		let results = 0;
		let negatives = this.negatives(numbers);

		numbers = numbers.split(/\D/);

		if (negatives) {
			throw new Error('Negative not allowed: '+ negatives);
	   	}	

		for (let i = 0; i < numbers.length; i++) {
			
			let number = parseInt(numbers[i]); 

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

 module.exports = {stringCalculator}
