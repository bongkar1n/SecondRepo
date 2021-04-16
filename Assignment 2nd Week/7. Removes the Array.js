

// function eraseArray(){
//     let input = document.getElementById("input").value;
//     let newInput= input.split("");
//     let input2 = document.getElementById("input2").value;
//     let newInput2 = input2.split("");
    
//     for (let i = 0; i < newInput.length; i++ ){
//         if(newInput[i] == newInput2){
//             newInput.splice(i, 1);
//          } 
                
//   } document.getElementById("result").textContent = newInput;
// }

function eraseArray(){
    let input = document.getElementById("input").value;
    let newInput= input.split("");
    console.log(newInput);
    let input2 = document.getElementById("input2").value;
    
    let result =[];
    for (let i = 0; i < newInput.length; i++ ){
        if (newInput[i] !== input2){
            result.push(newInput[i])
        }
    }
    document.getElementById("result").innerHTML = result.join(", ");


}