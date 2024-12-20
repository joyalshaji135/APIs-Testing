import {describe , test , it , expect} from "vitest";
import { fizzBuzz, max } from "../intro";

describe('max', () => {
    
    // First Test Case : Argument Passing Test Case First Argument is Less and Second Argument is Greater
    it('should return second argument if it is greater test 1', () => {

        expect(max(2,5)).toBe(5);

    }); 

    // Second Test Case : Argument Passing Test Case First Argument is Greater and Second Argument is Less
    it('should return first argument if it is greater test 2', () => {

        expect(max(5,2)).toBe(5);

    });

    // Third Test Case : Argument Passing Test Case First Argument is Greater and Second Argument is Less
    it('should return first and second argument are equal test 3', () => {

        expect(max(5,5)).toBe(5);

    });
});
describe ('fizzBuzz' , () => {

    // First Test Case : Argument Passing Test Case  15 and return String FizzBuzz
    it('should be return fizzbuzz if argument is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    // Second Test Case : Argument Passing Test Case  3 and return String FizzBuzz
    it('should be return fizz if argument is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    // Third Test Case : Argument Passing Test Case  5 and return String FizzBuzz
    it('should be return buzz if argument is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    // Fourth Test Case : Argument Passing Test Case 5 and return without String Ex: 1
    it('should be return buzz if argument is divisible by 5', () => {
        expect(fizzBuzz(1)).toBe('1');
     // expect(fizzBuzz(1)).toBe(1); => Error without string 1
    });
});


// it('should return first argument if it is greater test 1', () => {

    
// Arrange : Turn on the TV
        // Act : Press the Power Button  on the TV
        // Assert : Verify TV is Off

        // Three Line of Code 

        // Arrange 

        // const arr_var_1 = 10
        // const arr_var_2 = 20

        // Act 

        // const result = max(arr_var_1,arr_var_2);

        // Assert

        // expect(result).toBe(20); // 10 < 20 is true then true result is pass through the toBe(true value)

        // Two Line of Code 

        // Arrange + Act 
        
        // const result_1 = max(1,4);

        // Assert

        // expect(result_1).toBe(4);

        // Single Line of Code 

    //     expect(max(2,5)).toBe(5);

    // });