
function angkaPrima() {
    let angka = document.getElementById("angka1").value;
    let hasil = "Bilangan Prima"

    for (let i = 2; i < angka; i++){
        if (angka % i == 0){
            hasil = "bukan Bilangan Prima";
            break;
        }
    }

document.getElementById("hasil").textContent = (angka + " " + hasil)
document.getElementById("angka1").value = "";
}
