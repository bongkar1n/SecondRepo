
function mathLogic(){
    let namaPekerja, gajiGolongan, lamaKerja, hari, gajiLembur;
    namaPekerja = document.getElementById("teks1").value;
    gajiGolongan = document.getElementById("teks2").value;
    lamaKerja = document.getElementById("teks3").value;
    hari = 30;
    let bebanKerja = lamaKerja * hari;

    if(bebanKerja > 200){
        gajiLembur = 200 * bebanKerja;
    } else {
        gajiLembur = 0;
    }

    if(gajiGolongan == 'A'){
        gajiGolongan = 1000;
    } else if(gajiGolongan == 'B'){
      gajiGolongan = 2000;
      } else if (gajiGolongan == 'C'){
          gajiGolongan = 3000;
      } else if(gajiGolongan == 'D'){
          gajiGolongan = 4000;
      }  else {
          gajiGolongan = 0;
      }
      
           
    var totalGaji = gajiGolongan * bebanKerja + gajiLembur;
    document.getElementById("teks1").value = namaPekerja;
    document.getElementById("total gaji").value = totalGaji;
    document.getElementById("gajiLembur").value = Number(gajiLembur);






}
 