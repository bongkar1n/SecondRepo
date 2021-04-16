function removeArray(){
    const input   = document.getElementById("input").value;
    const input2   = document.getElementById("input2").value;
    //pisahkan input user
    let splitInput = [...input];
    //filter dengan input2, jika tidak sama maka tampilkan
    const result = splitInput.filter(letter => letter != input2);
    //hasilya dijoin dengan koma dan spasi agar rapi
    document.getElementById("output").textContent = result.join(", ");
    }

    const button = document.getElementById("button");
    button.addEventListener('click', () => removeArray());


function countingLetter(){
    const input   = document.getElementById("input3").value;
    const input2   = document.getElementById("input4").value;
    let splitInput = [...input];
    //filter input user dengan huruf yang akan dihitung dan tampilkan jumlahnya
    const result = splitInput.filter(letter => letter === input2 ? letter : 0);
    console.log(result);    
    document.getElementById("output2").textContent = `huruf ${input2} terdapat sebanyak ${result.length} kali`;
}
    const button2 = document.getElementById("button2");
    button2.addEventListener('click', () => countingLetter());



function reverseNumber(){
    const input   = Array.from(document.getElementById("input5").value);
   
    const result = input.map(number => number).reverse().join(", ");
    document.getElementById("output3").textContent = result;
    }
    const button3 = document.getElementById("button3");
    button3.addEventListener('click', () => reverseNumber());



function multiplicationTable(){
    const input = document.getElementById('input6').value;

    function range(start, end) {
    if(start === end) return [start];   
    return [start, ...range(start + 1, end)];
}

    let rangeNumbers = range(1, 10);
    let result = rangeNumbers.map(number => `${number} X ${input} = ${number*input}`);
    console.log(result);
    document.getElementById("output4").innerHTML = result.join(", ");

}
    const button4 = document.getElementById("button4");
    button4.addEventListener('click', () => multiplicationTable());