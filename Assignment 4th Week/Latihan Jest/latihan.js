function sum(a, b) {
    return a + b;
  }


  function printSquare(inputNumbers) {
        let emptyArray = [];

   for (let a = 1; a <= inputNumbers; a++) {
    emptyArray.push(a * a);
    }
    return emptyArray;
  }

    function thisReverse(urNumber) {
      let becomeString = urNumber.toString();
      let split = becomeString.split("");
      let reverse = split.reverse();
      let join = reverse.join("");
      let becomeNumber = Number(join);
      return becomeNumber;
    }

    function primeNumber(number) {
      let result = "is Prime"
  
      for (let i = 2; i < number; i++){
          if (number % i == 0){
              result = "is not Prime";
              break;
          }
      }
      return result;
  }

  
function groupingBasedOnAges(age) {

    let group;
      
      if(age <= 1){
          group = 'Balita';
      }else if(age >= 2 && age <= 10){
          group = 'Anak-Anak';
      }else if(age >= 11 && age <= 19){
          group = 'Remaja';
      }else if(age >= 20 && age <= 60){
          group = 'Dewasa';
      }else if(age > 60){
          group = 'Lanjut Usia';
      } else{
          group = "masukan umur valid";
      }
  
    return group;
  }

  module.exports = { sum, printSquare, thisReverse, primeNumber, groupingBasedOnAges };