
// hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all.
// 
    
// const input   = document.getElementById("input").value;
// const input   = 'hello world oke lorem ipsum dolor, Aku mau belajar react.js., Hey kamu mau kemana?., Kapan kita jalan bareng lagi, Hello all';
// const input2 = 'hello';


function findInclude(){
const input   = document.getElementById("input").value;
const input2   = document.getElementById("input2").value;
//Kita split setiap kalimat
let splitInput = input.split(".");
//tambahkan kondisi insensitive
let addCondition = new RegExp(input2, "i");
//kita filter setiap isi array tadi dan pisahkan kalimat yang berisi kata yang dicari
const result = splitInput.filter(word => word.match(addCondition));
document.getElementById("output").textContent = result
}
const button = document.getElementById("button");
button.addEventListener('click', () => findInclude() );

