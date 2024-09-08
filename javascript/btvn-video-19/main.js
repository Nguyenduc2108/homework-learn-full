// bài 1
function triangle(n) {
    var num = 1;
    for (var i = 1; i <= n; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += num + "\t";
            num++;
        }
        document.write(row + "<br>");
    }
}

triangle(5);

// bài 2

function chessBoard(n) {
    var table = "<table>";
    for (var i = 1; i <= n; i++) {
        table += "<tr>";
        for (var j = 1; j <= n; j++) {
            // if ((i + j) % 2 == 0) {
            //     table += "<td class='black'></td>";
            // } else {
            //     table += "<td class='white'></td>";
            // }
            table += "<td class='" + ((i + j) % 2 !== 0 ? "green" : "white") + "'></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.write(table);
}

chessBoard(8);

// bài 3 : Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
