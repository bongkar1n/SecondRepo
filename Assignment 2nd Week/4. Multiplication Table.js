
function multiplicationTable(){
    let input = document.getElementById("input").value;
    for(let i = 1; i <= 10; i++) {
        const result = i * input;
        document.write(`${input} x ${i} = ${result}  <br / >`);
    } 
}