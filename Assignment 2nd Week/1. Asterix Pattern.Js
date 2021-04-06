
// function printPattern(){
//     let input = document.getElementById("input").value;
//     let start = 1;
//     let temp = [];
//     while(start <= input){
//         temp.push('*');
//         start++;
//     }
//     document.getElementById("result").textContent = temp;
// }

// function pattern(){
//     let input = document.getElementById("input").value;
        
//     for(let var1 = 1; var1 <= input; var1++){
//        for(let var2 = 1; var2 <= var1; var2++){
//             document.getElementById("result").innerHTML = "*";
//             if( var2 === var1){
//                 continue;
//             } else {
//                 document.getElementById("result").innerHTML = " ";
//             }
//         }
//         document.getElementById("result").innerHTML = "<br />";
//     }

    
// }

function pattern(){
    let input = document.getElementById("input").value;
    
        
    for(let num1 = 1; num1 <= input; num1++){
       for(let num2 = 1; num2 <= num1; num2++){
            document.write("*" + " ");
            
        }
        document.write("<br />");
    }

}


// function trianglePattern(){
//     let input = document.getElementById("input").value;
    
        
//     for(let var1 = 1; var1 <= input; var1++){

//         for(let var3 = 1; var3 <=(input - var1); var3++){
//             document.write("&nbsp");
//         }
//        for(let var2 = 1; var2 <= var1; var2++){
//             document.write("*");
//             if( var2 === var1){
//                 continue;
//             } else {
//                 document.write(" ");
//             }
//         }
//         document.write("<br />");
//     }

// }

// var x, y;

// for (x = 1; x <= 5; x++) {
//   console.log(`perulangan ${x}`);
//   for (y = 1; y <= x; y++) {
//     document.write(y);
//     console.log(`yang diprint oleh perulangan ${x} adalah ${y}`);
//     if (y === x) {
//       continue;
//     } else {
//       document.write(" ");
//     }
//   }
//   document.write("<br />");
// }
