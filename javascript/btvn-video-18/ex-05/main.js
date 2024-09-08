for (let i = 1; i <= 10; i++) {
    document.write(`<h2>Bảng cửu chương ${i}</h2>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`<p>${i} x ${j} = ${i * j}</p>`);
    }
}
