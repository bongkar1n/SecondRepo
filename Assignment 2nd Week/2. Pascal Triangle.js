function generate(numRows) {
    numRows = document.getElementById("input").value;
    let pascalTriangle = new Array(numRows);
    for (let i = 0; i < numRows; i++){
        let row = new Array (i + 1);
        row [0] = 1;
        row [row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++){
            let rowAbove = pascalTriangle[ i - 1 ];
            row[j] = rowAbove[j] + rowAbove[j - 1];

        }
        pascalTriangle[1] = row;
    }
     
     return document.getElementById("result").innerHTML = pascalTriangle;
}


// function pasc(n){
//     var result = [];
//         result[0] = [1];
//         result[1] = [1,1];
//     for (var row = 2; row < n; row++){
//         result[row] = [1];
//         for (var col = 1; col <= row -1; col++){
//             result[row][col] = result[row-1][col] + result[row-1][col-1];
//             result[row].push(1);
//         }
//     }
//     return result;
//     }
    
//     for (var i = 0; i < pasc(10).length; i++){
//         document.write(pasc(10)[i]+"<br>");
//         console.log(pasc(10)[i]+"<br>");
//     }
