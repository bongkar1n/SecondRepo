
function groupingBasedOnAges() {

let age = document.getElementById("age").value;
let group;
    
    if(age <= 1){
        group = 'Balita';
    }else if(age >= 2 && age <= 10){
        group = 'Anak-Anak';
    }else if(age >= 11 && age <= 19){
        group = 'Remaja';
    }else if(age >= 20 && age <= 60){
        group = 'Dewasa';
    }else if(age > 60){
        group = 'Lanjut Usia';
    } else{
        group = "masukan umur valid";
    }

    
document.getElementById("result").textContent = group;

}
