// let input = document.getElementById("input").value;

// function pushData(){
//     let input2 = [];
//     let inputArray = document.getElementById("input2").value;
//     input2.push(inputArray);
//     let pushValue = "";
//     for(i = 0; i < input2.length; i++){
//         pushValue += input2[i];
//     }
// }


// function eraseArray(){
    
//     let input2 = ["a", "b", "c", "d", "e"];
//     for (let i = 0; i < input2.length; i++ ){
//         if(input2[i] == input){
//             input2.splice(i, 1);
//         } else{
            
//         }
//         document.getElementById("result").textContent = input2;
//     }
    
    
// }

// function eraseArray(){
// let input = document.getElementById("input").value;
// let newArray= input.split("");
// let input2 = document.getElementById("input2").value;
// let index = newArray.indexOf(input2);
//     if(index >= -1){
//       newArray.splice(index, 1);
//     }
// document.write(newArray);
// }


function eraseArray(){
    let input = document.getElementById("input").value;
    let newInput= input.split("");
    let input2 = document.getElementById("input2").value;
    
    for (let i = 0; i < newInput.length; i++ ){
        if(newInput[i] == input2){
            newInput.splice(i, 1);
         } 
                
  } document.getElementById("result").textContent = newInput;
}