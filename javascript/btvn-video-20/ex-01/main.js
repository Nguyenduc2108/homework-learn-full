var text = document.querySelector("p");
var textContent = text.innerText;
let i = 0;

function render() {
    var words = textContent.split(" ");
    if (i >= words.length) i = 0;
    var content = words[i];

    var html = `<span class="highlight">${content}</span>`;
    words[i] = html;
    text.innerHTML = words.join(" ").trim();
    i++;
}

setInterval(() => {
    render();
}, 200);
