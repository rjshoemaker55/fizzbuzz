// const fizzbuzz = () => {
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// const fizzbuzz = () => {
//   for (i = 1; i <= 100; i++) {
//     i % 5 === 0 && i % 3 === 0
//       ? console.log('FizzBuzz')
//       : i % 5 === 0
//       ? console.log('Buzz')
//       : i % 3 === 0
//       ? console.log('Fizz')
//       : console.log(i);
//   }
// };

const fizzbuzz = () => {
  for (i = 1; i <= 100; i++) {
    console.log(
      !(i % 3) && !(i % 5)
        ? 'fizzbuzz'
        : !(i % 3)
        ? 'fizz'
        : !(i % 5)
        ? 'buzz'
        : i
    );
  }
};

fizzbuzz();
