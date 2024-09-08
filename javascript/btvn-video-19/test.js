// exercise 1
function triangle(n) {
    if (n < 1 || typeof n !== "number" || n % 1 !== 0 || isNaN(n)) {
        console.log("Invalid input");
        return;
    }

    var triangle = "";
    var num = 1;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            triangle += num + "\t";
            num++;
        }
        triangle += "<br/>";
    }
    document.write(triangle);
}

triangle(8);

// exercise 2
function drawChessBoard(n) {
    if (n < 1 || typeof n !== "number" || n % 1 !== 0 || isNaN(n)) {
        console.log("Invalid input");
        return;
    }
    var table = "<table>";
    for (var i = 1; i <= n; i++) {
        table += "<tr>";
        for (var j = 1; j <= n; j++) {
            var isEvent = (i + j) % 2 === 0;
            if (isEvent) {
                table += "<td class='green'></td>";
            } else {
                table += "<td class='white'></td>";
            }
            // table += "<td class='" + (isEvent ? "green" : "white") + "'></td>";
        }
        table += "</tr>";
    }

    table += "</table>";

    document.write(table);
}

drawChessBoard(8);
