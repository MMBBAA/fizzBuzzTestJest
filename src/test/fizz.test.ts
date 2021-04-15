import { fizzBuzz } from '../core/FizzBuzz'

/*
Para el número 1 el rdo debe ser 1
Para el número 3 el rdo debe ser "fizz"
Para el número 5 el rdo debe ser "buzz"
Para el número 15 el rdo debe ser "fizzbuzz"
Para cualquier número divisible entre 3 el rdo debe ser "fizz"
Para cualquier número divisible entre 5 el rdo debe ser "buzz"
Para cualquier número divisible entre 15 el rdo debe ser "fizzbuzz"
Para el resto de números el rdo debe ser el propio número recibido
*/


describe('FizzBuzz', () => {
    it('should return one if receive one', () => {
        const expected = 1;
        const result = fizzBuzz(1)

        expect(result).toBe(expected);
    });

    it('should return one if receive three', () => {
        const expected = "fizz";
        const result = fizzBuzz(3)

        expect(result).toBe(expected);
    });

    it('should return buzz if receive five', () => {
        const expected = "buzz";
        const result = fizzBuzz(5)

        expect(result).toBe(expected);
    });

    it('should return buzz if receive fifteen', () => {
        const expected = "fizzbuzz";
        const result = fizzBuzz(15)

        expect(result).toBe(expected);
    });
    it('should return fizz if receive any number divisible by three', () => {
        const expected = "fizz";
        const result = fizzBuzz(9)

        expect(result).toBe(expected);
    });
    it('should return buzz if receive any number divisible by five', () => {
        const expected = "buzz";
        const result = fizzBuzz(25)

        expect(result).toBe(expected);
    });
    it('should return buzz if receive any number divisible by fifteen', () => {
        const expected = "fizzbuzz";
        const result = fizzBuzz(30)

        expect(result).toBe(expected);
    });
    it('should return the same number that receives', () => {
        const expected = 4;
        const result = fizzBuzz(4)

        expect(result).toBe(expected);
    });
});

