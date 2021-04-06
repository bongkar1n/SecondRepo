
// var fibonacci= function(n) {
  
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
    
//   }

 
// };


// document.write(fibonacci(9))


// function fibo(n){
//   if ( n === 1){
//     return 1
//   } else if(n === 0){
//     return 0
//   } else{
//     return fibo(n - 1) + fibo(n-2)
//   }
// }
// document.write(fibo(9));

function fibonacci(){
  let input = document.getElementById("input").value;
  let a, b, result;
  a = 0;
  document.write(a + ", ");
  b = 1;
  result = b;
  for(let i = 1; i <= input; i++){
    document.write(result + ", ");
    result = a + b;
    a = b;
    b = result;
  }
}
