

// function checkingVocal(){
// let input = document.getElementById("input").value;
// let vocalLetters = ["a", "i", "u", "e", "o"];
// let vocalLetters2 = ["A", "I", "U", "E", "O"];
// let result;

// if(input == vocalLetters || vocalLetters2 ){
//     result = `${result} adalah huruf vocal`;
// } else {
//     result =  `${result} bukanlah huruf vocal`;
// } 
//  document.getElementById("result").textContent = result;

// }

function checkingVowel(){
    var input = document.getElementById("input").value;
   
    if(input === 'a' || input === 'i' || input === 'u' || input === 'e' || input === 'o' || input === 'A' || input === 'I' ||
    input === 'U' || input === 'E' || input === 'O'){
        document.getElementById("result").textContent = `${input} adalah vowel`;

    }else {
        document.getElementById("result").textContent = `${input} bukanlah vowel`;
    }
}

