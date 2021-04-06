
// ini untuk input 15 dan hasilnya urut dari 1 sampai 15
function printKata() {
    var inputAngka = document.getElementById("input-perulangan").value;
        var arrayKosong = [];

   for (var a = 1; a <= inputAngka; a++) {
    arrayKosong.push(` ${a}`);
    }
    document.getElementById("output-perulangan").innerHTML = arrayKosong;
}



function printKuadrat() {
    var inputAngka = document.getElementById("input-perulangan2").value;
        var arrayKosong = [];

   for (var a = 1; a <= inputAngka; a++) {
    arrayKosong.push( " " + `${a}` * `${a}`);
    }
    document.getElementById("output-perulangan2").innerHTML = arrayKosong;
}

function printKelipatan3() {
    var inputAngka = document.getElementById("input-perulangan3").value;
        var arrayKosong = [];

   for (var a = 1; a <= inputAngka; a++) {
    arrayKosong.push(" " + `${a}` * 3 + " ");
    }
    document.getElementById("output-perulangan3").innerHTML = arrayKosong;
}

