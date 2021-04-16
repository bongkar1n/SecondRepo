
function checkPrimeNumber(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let result = [];
  
    while ( input1 != 1 && input1 <= input2 ){
        let flag = 0;
        for(let i = 2; i < input1; i++){
            if (input1 % i == 0){
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        result.push(input1);
        input1++;
       
    }
    document.getElementById("result").innerHTML = result.join(", ");
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

