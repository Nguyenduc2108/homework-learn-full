const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const keys = $$(".key");
const displayInput = $(".display .input");
const displayOutput = $(".display .output");

/**
 * Evaluate a mathematical expression and return the result.
 * @param {string} expression - The expression to evaluate.
 * @returns {number} - The result of the expression.
 */
function safeEval(expression) {
    return Function('"use strict";' + `return ${expression}`)();
}

let input = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener("click", () => {
        if (value === "clear") {
            input = "";
            displayInput.textContent = "";
            displayOutput.textContent = "";
        } else if (value === "backspace") {
            input = input.slice(0, -1);
            displayInput.innerHTML = cleanInput(input);
        } else if (value === "=") {
            let result = safeEval(prepareInput(input));
            displayOutput.textContent = CleanOutput(result);
        } else if (value === "bracket") {
            if (
                input.indexOf("(") === -1 ||
                (input.indexOf("(") !== -1 &&
                    input.indexOf(")") !== -1 &&
                    input.lastIndexOf("(") < input.lastIndexOf(")"))
            ) {
                input += "(";
            } else if (
                (input.indexOf("(") !== -1 && input.indexOf(")") === -1) ||
                (input.indexOf("(") !== -1 &&
                    input.indexOf(")") !== -1 &&
                    input.lastIndexOf("(") > input.lastIndexOf(")"))
            ) {
                input += ")";
            }

            displayInput.innerHTML = cleanInput(input);
        } else {
            if (ValidateInput(value)) {
                input += value;
                displayInput.innerHTML = cleanInput(input);
            }
        }
        // switch (value) {

        //     case "clear":
        //         input = "";
        //         displayInput.textContent = "";
        //         displayOutput.textContent = "";
        //         break;

        //     case "backspace":
        //         input = input.slice(0, -1);
        //         displayInput.textContent = cleanInput(input);
        //         break;

        //     case "=":
        //         let result = safeEval(input);
        //         displayOutput.textContent = result;
        //         break;

        //     case "bracket":
        //         if (
        //             input.indexOf("(") === -1 ||
        //             (input.indexOf("(") !== -1 &&
        //                 input.indexOf(")") !== -1 &&
        //                 input.lastIndexOf("(") < input.lastIndexOf(")"))
        //         ) {
        //             input += "(";
        //         } else if (
        //             (input.indexOf("(") !== -1 && input.indexOf(")") === -1) ||
        //             (input.indexOf("(") !== -1 &&
        //                 input.indexOf(")") !== -1 &&
        //                 input.lastIndexOf("(") > input.lastIndexOf(")"))
        //         ) {
        //             input += ")";
        //         }

        //         displayInput.innerHTML = cleanInput(input);
        //         break;

        //     default:
        //         input += value;
        //         displayInput.innerHTML = cleanInput(input);
        // }
    });
}

function cleanInput(input) {
    let inputArr = input.split("");
    let inputArrLength = inputArr.length;

    for (let i = 0; i < inputArrLength; i++) {
        if (inputArr[i] === "*") {
            inputArr[i] = `<span class="operator">x</span>`;
        } else if (inputArr[i] === "/") {
            inputArr[i] = `<span class="operator">÷</span>`;
        } else if (inputArr[i] === "+") {
            inputArr[i] = `<span class="operator">+</span>`;
        } else if (inputArr[i] === "-") {
            inputArr[i] = `<span class="operator">-</span>`;
        } else if (inputArr[i] === "(") {
            inputArr[i] = `<span class="brackets">(</span>`;
        } else if (inputArr[i] === ")") {
            inputArr[i] = `<span class="brackets">)</span>`;
        } else if (inputArr[i] === "%") {
            inputArr[i] = `<span class="percent">%</span>`;
        }
        // switch (inputArr[i]) {
        //     case "*":
        //         inputArr[i] = `<span class="operator">x</span>`;
        //         break;
        //     case "/":
        //         inputArr[i] = `<span class="operator">÷</span>`;
        //         break;
        //     case "+":
        //         inputArr[i] = `<span class="operator">+</span>`;
        //         break;
        //     case "-":
        //         inputArr[i] = `<span class="operator">-</span>`;
        //         break;
        //     case "(":
        //         inputArr[i] = `<span class="brackets">(</span>`;
        //         break;
        //     case ")":
        //         inputArr[i] = `<span class="brackets">)</span>`;
        //         break;
        //     case "%":
        //         inputArr[i] = `<span class="percent">%</span>`;
        //         break;
        //     default:
        //         console.log(`Unrecognized operator: ${inputArr[i]}`);
        // }
    }
    return inputArr.join("");
}

function CleanOutput(output) {
    let outputString = output.toString();
    let decimal = outputString.split(".")[1];
    outputString = outputString.split(".")[0];

    let outputArr = outputString.split("");

    if (outputArr.length > 3) {
        for (let i = outputArr.length - 3; i > 0; i -= 3) {
            outputArr.splice(i, 0, ",");
        }
    }

    if (decimal) {
        outputArr.push(".");
        outputArr.push(decimal);
    }

    return outputArr.join("");
}

function ValidateInput(value) {
    let lastInput = input.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (value === "." && lastInput === ".") return false;

    if (operators.includes(value) && operators.includes(lastInput)) return false;

    return true;
}

function prepareInput(input) {
    let inputArr = input.split("");

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === "%") {
            inputArr[i] = "/100";
        }
    }
    return inputArr.join("");
}
