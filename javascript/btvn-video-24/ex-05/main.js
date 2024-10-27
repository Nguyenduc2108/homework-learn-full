var data = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function buildNestArr(data) {
    const map = {};
    const nestArr = [];

    data.forEach((item) => {
        map[item.id] = { id: item.id, name: item.name, children: [] };
    });

    data.forEach((item) => {
        if (item.parent === 0) {
            nestArr.push(map[item.id]);
        } else {
            map[item.parent].children.push(map[item.id]);
        }
    });

    nestArr.forEach(removeEmptyChildren);

    function removeEmptyChildren(category) {
        if (category.children.length === 0) {
            delete category.children;
        } else {
            category.children.forEach(removeEmptyChildren);
        }
    }

    return nestArr;
}

var categories = buildNestArr(data);
console.log(categories);

function createOption(categories, level = 0) {
    let option = "";
    let indent = "--|".repeat(level);

    categories.forEach((category) => {
        option += `<option value="${category.id}">${indent} ${category.name}</option>`;

        if (category.children) {
            option += createOption(category.children, level + 1);
        }
    });

    return option;
}

const select = `<select >${createOption(categories)}</select>`;

document.body.innerHTML += select;

var a = "123";
