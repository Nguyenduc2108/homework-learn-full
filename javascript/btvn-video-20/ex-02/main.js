const $ = document.querySelector.bind(document);

window.onload = function () {
    inputSearch.focus();
};

const inputSearch = $("#text-to-search");
const text = $(".text");
const btn = $(".wrapper button");

inputSearch.addEventListener("input", function () {
    var value = inputSearch.value.trim();

    if (value !== "") {
        let regExp = new RegExp(value, "gi");
        text.innerHTML = text.textContent.replace(regExp, "<span class='mark'>$&</span>");
    }
});

btn.addEventListener("click", function () {
    inputSearch.value = "";
    inputSearch.focus();
});
