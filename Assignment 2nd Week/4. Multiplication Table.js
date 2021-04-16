
function multiplicationTable(){
    let input = document.getElementById("input").value;
    let show = "";
    for(let i = 1; i <= 10; i++) {
        const result = input * i;
        show += `${input} * ${i} = ${result} <br>`; 
    } 
    return document.getElementById('result').innerHTML = show;
       
}


// const multiplyInput = num => {
//     let show = "";

//     if (num == 0) return alert('angka tidak boleh 0');
//     else {
//         for (let x = 1; x <= 10; x++) {
//             show += `${num} * ${x} = ${num * x}<br>`;
//         }
//         let output = document.getElementById('output');
//         return output.innerHTML = show;
//     }
    
// };

// const inputNumber = document.querySelector('#input');
// const outputButton = document.getElementById('execute');
// outputButton.addEventListener('click', () => {
//     multiplyInput(inputNumber.value);
// });