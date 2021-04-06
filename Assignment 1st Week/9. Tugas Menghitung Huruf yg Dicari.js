function countLetters(){
    let text = document.getElementById("input").value;
    let letter = document.getElementById("letter").value;

    let letterCount = 0;
    for (let position = 0; position < text.length; position++){
        if (text.charAt(position) == letter){
            letterCount += 1;
        }
    }

    document.getElementById("output").textContent = ("Huruf " + letter + " muncul " + letterCount + " kali");
    document.getElementById("input").value = "";
    document.getElementById("letter").value = "";



}