
function checkPrimeNumber(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
  
    while ( input1 != 1 && input1 <= input2 ){
        let h = 0;
        for(let i = 2; i < input1; i++){
            if (input1 % i == 0){
                h = 1;
                break;
            }
        }
        if (h == 0)
        document.write(input1 + " ");
        input1++;
    }
}

// function checkPrimeNumber2(){
//     let input1 = Number(document.getElementById("input1").value);
//     let input2 = Number(document.getElementById("input2").value);
//     let prime;

//     for(let i = input1; i <= input2; i++){
//         prime = false;
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 break;
//             } else {
//                 prime = true;
//             }
//         } if(prime){
//             document.write(i + ', ')
//         }
//     }


// }

