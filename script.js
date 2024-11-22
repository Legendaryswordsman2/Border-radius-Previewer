let resultText = document.querySelector(".outputContent");
let result = "";
const boxElement = document.querySelector('.Box')

let topLeftInputBox = document.getElementById("top-left");
let topRightInputBox = document.getElementById("top-right");
let bottomLeftInputBox = document.getElementById("bottom-left");
let bottomRightInputBox = document.getElementById("bottom-right");

topLeftInputBox.addEventListener("input", UpdateBorderRadius);
topRightInputBox.addEventListener("input", UpdateBorderRadius);
bottomLeftInputBox.addEventListener("input", UpdateBorderRadius);
bottomRightInputBox.addEventListener("input", UpdateBorderRadius);

UpdateResult();

function UpdateBorderRadius() {
    let topLeftValue, topRightValue, bottomLeftValue, bottomRightValue;

    topLeftValue = topLeftInputBox.value != "" ? topLeftInputBox.value : 0;
    topRightValue = topRightInputBox.value != "" ? topRightInputBox.value : 0;
    bottomLeftValue = bottomLeftInputBox.value != "" ? bottomLeftInputBox.value : 0;
    bottomRightValue = bottomRightInputBox.value != "" ? bottomRightInputBox.value : 0;

    result = topLeftValue + "px "
        + topRightValue + "px "
        + bottomRightValue + "px "
        + bottomLeftValue + "px ";

    boxElement.style.borderRadius = result;

    UpdateResult();
}

topLeftInputBox.addEventListener("input", NumbersOnlyAllowed);
topRightInputBox.addEventListener("input", NumbersOnlyAllowed);
bottomLeftInputBox.addEventListener("input", NumbersOnlyAllowed);
bottomRightInputBox.addEventListener("input", NumbersOnlyAllowed);


function NumbersOnlyAllowed() {
    this.value = this.value.replace(/[^0-9]/g, '');
}

function UpdateResult() {
    if (result == "") {
        UpdateBorderRadius();
        return;
    }
    resultText.textContent = result;
}
