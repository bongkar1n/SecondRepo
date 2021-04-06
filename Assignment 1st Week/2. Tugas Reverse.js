
// jadiin String ==> Pisahin ==> Reverse ==>
// gabungin lagi pakai join ==> cetak deh


function iniReverse() {
  var urNumber = document.getElementById("urNumber").value;
  var jadiString = urNumber.toString();
  var split = jadiString.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  var jadiNumber = Number(join);
  document.getElementById("result").value = jadiNumber;
  return jadiNumber;
}

// let urNumber = document.getElementById("urNumber");

