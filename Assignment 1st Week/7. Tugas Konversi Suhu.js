function konversiSuhu(){
let nilaiSuhu = document.getElementById("nilaiSuhu").value;
let jenis = document.getElementById("jenis").value;
let jenisKonversi = document.getElementById("jenisKonversi").value;
let suhuAkhir;

if(jenis == "celcius"){
    if(jenisKonversi == "Kelvin"){
        suhuAkhir = (nilaiSuhu + 273.15);
    } else if(jenisKonversi == "Fahrenheit"){
        suhuAkhir = ((nilaiSuhu*1.8) + 32);

    } else {
        suhuAkhir = nilaiSuhu;
    }

}

if(jenis == "fahrenheit"){
    if(jenisKonversi == "Kelvin"){
        suhuAkhir = ((nilaiSuhu - 32)/1.8) + 32;
    } else if (jenisKonversi == "Celcius") {
        suhuAkhir = ((nilaiSuhu - 32)/ 1.8);    
    } else {
        suhuAkhir = nilaiSuhu;
    }
}

if(jenis == "kelvin"){
    if (jenisKonversi == "Celcius"){
        suhuAkhir = (nilaiSuhu - 273.15);
    } else if(jenisKonversi == "Fahrenheit"){
        suhuAkhir = (((nilaiSuhu-273.15) * 1.8) + 32);
    } else {
        suhuAkhir = nilaiSuhu;
    }
}

document.getElementById("hasil").textContent = (suhuAkhir + " " + jenisKonversi)

    
}