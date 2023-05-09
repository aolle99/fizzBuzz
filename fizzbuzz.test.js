const fizzbuzz = require('./fizzbuzz');
const fizzbuzzloop = require('./fizzbuzzloop');
let num = 1;
let num_mult_3 = 3;
let num_mult_5 = 5;
let num_mult_15 = 15;

const array_15 =[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
const array_100 =[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19, "Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34, "Buzz", "Fizz", 37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz", "Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz", 73,74, "FizzBuzz",76,77,"Fizz",79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz",91,92,"Fizz",94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]

test('Fizzbuzz de ' + num + ' es igual a ' + num, () => {
  expect(fizzbuzz(num)).toBe(num);
});

test('Si es multiple de 3 retorna Fizz',() => {
  expect(fizzbuzz(num_mult_3)).toBe('Fizz');
});

test('Si es multiple de 5 retorna Buzz',() => {
  expect(fizzbuzz(num_mult_5)).toBe('Buzz');
});

test('Si es multiple de 3 i de 5 retorna FizzBuzz',() => {
  expect(fizzbuzz(num_mult_15)).toBe('FizzBuzz');
});

test('Itera fins a 15 i comprova si es multiple de 3 i de 5 retorna FizzBuzz',() => {
  expect(fizzbuzzloop(num_mult_15)).toStrictEqual(array_15);
});

test('Itera fins a 100 i comprova si es multiple de 3 i de 5 retorna FizzBuzz',() => {
  expect(fizzbuzzloop(100)).toEqual(array_100);
});
