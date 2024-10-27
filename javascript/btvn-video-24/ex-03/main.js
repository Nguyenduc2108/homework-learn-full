const flatArray = [
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

function buildNestedStructure(flatArray) {
    const map = {};
    const nestedArray = [];

    flatArray.forEach((item) => {
        map[item.id] = { id: item.id, name: item.name, children: [] };
    });

    flatArray.forEach((item) => {
        if (item.parent === 0) {
            nestedArray.push(map[item.id]);
        } else {
            map[item.parent].children.push(map[item.id]);
        }
    });

    // Xóa thuộc tính children rỗng
    nestedArray.forEach(removeEmptyChildren);

    function removeEmptyChildren(category) {
        if (category.children.length === 0) {
            delete category.children; // Xóa thuộc tính children nếu không có phần tử nào
        } else {
            category.children.forEach(removeEmptyChildren);
        }
    }

    return nestedArray;
}

const nestedCategories = buildNestedStructure(flatArray);
console.log(nestedCategories);
// console.log(JSON.stringify(nestedCategories, null, 2));
