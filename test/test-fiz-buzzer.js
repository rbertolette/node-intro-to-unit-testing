// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return expected strings if dividable by 15, 5, 3 or the number if not', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 45, expected: 'fizz-buzz'},
      {a: 20, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 7, expected: 7}
    ];
    // for each set of inputs (a, b), `fizzBuzz` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg is not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['string', function(){}, [8, 4, 5, 'word']];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});