
function pattern(){
    let input = document.getElementById("input").value;
    let patternresult = [];
        
    for(let num1 = 1; num1 <= input; num1++){
       for(let num2 = 1; num2 <= num1; num2++){
            patternresult.push("*");
        }
        patternresult.push("<br>");;
    }
patternresult = patternresult.join("");

document.getElementById("result").innerHTML = `${patternresult}`;
}


// const printPattern = num => {
//     let pattern = "";
//     let asterixPattern = document.getElementById('result');
//     if (num == 0) return alert('angka tidak boleh 0');
//     else {
//         for (let x = 1; x <= num; x++) {
//             for (let y = 1; y <= x; y++){
//                 pattern += "*" + " ";
//             }
//             pattern += "<br>";
//         }
//         return asterixPattern.innerHTML = pattern;
//     }
    
// };

// const inputNumber = document.getElementById("input");
// const outputButton = document.getElementById('button');
// outputButton.addEventListener('click', () => {
//     printPattern(inputNumber.value);
// });



// function astericPattern(){
//     let counter,col,row = document.getElementById("input").value;
//     let pattern =[];
//     let object = "*";
//     console.log(row);
//     for(counter=1;counter<=row;counter++){
//         for(col=1; col<=counter; col++){
//             pattern.push(object);
//         }
//             pattern.push("<br>");
//     }
//     pattern = pattern.join("");

//     document.getElementById("result").innerHTML = `<hr>Result<br><br>${pattern}`
//     document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br>${pattern}</div>`
// }