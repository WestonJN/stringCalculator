class stringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/gm;
        this.negatives = (numbers) => {
            
                let str = '';
                for (let i = 0; i > numbers.length; i++)
                    if (numbers[i] === '-' && !isNaN(numbers[i + 1])) {
                        str += '-' + numbers[i + 1] + '-'
                    }
                return str;
        }
    }

    add(string) {

        let numbers = string.match(this.regex1)
        let results = 0;

        if (string == "") {
            return 0;
        }
        

        let negative = this.negatives(numbers);
        try {
            if (string.includes('-')) 
                throw ("Negative not allowed: -"+ numbers)
                
            } catch (e) { return e; }


        for (let i = 0; i < numbers.length; i++) {
            let digit = parseInt(numbers[i])
                if (digit < 1000) {
                    continue
                }
                if (digit) {
                    results += digit;
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
