// function eraseAndJoin(){

// var a = [1, 2, 3];
// var b = [101, 2, 1, 10];
// var c = a.concat(b.filter((item) => a.indexOf(item) < 0));

// console.log(c) // c is [1, 2, 3, 101, 10]
// }

// let inputAngka = [1, 3, 4, 5, 6];
// console.log(inputAngka);
// for (let newInput of inputAngka ){
//     console.log(newInput * 2);
// }

// function eraseAndJoin(){
//     let input = document.getElementById("input").value;
//     let newInput= input.split("");
//     let input2 = document.getElementById("input2").value;
//     let newInput2= input2.split("");


// let array1 = ['a','b','c']
// let array2 = ['c','c','d','e'];
// let array3 = array1.concat(array2);
// array3 = [...new Set([...array1,...array2])]
// console.log(array3);

function eraseArray(){
    let input = document.getElementById("input").value;
    let newInput= input.split("");
    let input2 = document.getElementById("input2").value;
    let newInput2= input2.split("");
    let array = [...newInput, ...newInput2];
    let mySet = new Set(array);
    let newArray = [...mySet];
    document.getElementById("result").textContent = newArray.sort();
}


    