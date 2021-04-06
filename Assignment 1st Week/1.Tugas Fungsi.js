
function Kaliin() {
    let c = document.getElementById("angka1");
    let d = document.getElementById("angka2");
    hasilKali = Number(c.value) * Number(d.value);
    document.getElementById("hasil").value = hasilKali;
    }



function Bagiin(){
    let e = document.getElementById("angka1");
    let f = document.getElementById("angka2");
    hasilBagi = Number(e.value) / Number(f.value);
    document.getElementById("hasil").value = hasilBagi;
}


function tambahin(){
    var angka1 = document.getElementById("angka1");
    var angka2 = document.getElementById("angka2");
    var hasil = document.getElementById("hasil");

    hasil.value = Number(angka1.value) + Number(angka2.value);
    return;
}
document.write(hasil.value);

var hasilKurang = document.getElementById("hasil");
var angkaA = document.getElementById("angka1");
var angkaB = document.getElementById("angka2");

function kurangin(){
    hasilKurang.value = Number(angkaA.value) - Number(angkaB.value);
    
    document.getElementById("hasil").innerHTML = hasilKurang;
}
