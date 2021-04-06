
function grading(){

var nilaiAnda = document.getElementById("angka1").value;

    if (nilaiAnda <= 100 && nilaiAnda >= 86){
        document.getElementById("hasil").innerHTML = "Nilai anda A";
    } else if (nilaiAnda <= 85 && nilaiAnda >= 70){
        document.getElementById("hasil").innerHTML = "Nilai anda B";
    } else if (nilaiAnda <= 69 && nilaiAnda >= 50){
        document.getElementById("hasil").innerHTML = "Nilai anda C";
    } else if (nilaiAnda <= 49 && nilaiAnda >= 30){
        document.getElementById("hasil").innerHTML = "Nilai anda D";
    } else if (nilaiAnda <= 29 && nilaiAnda >= 0){
        document.getElementById("hasil").innerHTML = "Nilai anda E";
    } else {
        document.getElementById("hasil").innerHTML = "Masukan nilai yang valid";
        }
    
}   

