const boxElement = document.querySelector('.Box')

let topLeftInputBox = document.getElementById("top-left");
let topRightInputBox = document.getElementById("top-right");
let bottomLeftInputBox = document.getElementById("bottom-left");
let bottomRightInputBox = document.getElementById("bottom-right");

topLeftInputBox.addEventListener("input", UpdateBorderRadius);
topRightInputBox.addEventListener("input", UpdateBorderRadius);
bottomLeftInputBox.addEventListener("input", UpdateBorderRadius);
bottomRightInputBox.addEventListener("input", UpdateBorderRadius);

function UpdateBorderRadius() {
    let topLeftValue, topRightValue, bottomLeftValue, bottomRightValue;

    topLeftValue = topLeftInputBox.value != "" ? topLeftInputBox.value : 0;
    topRightValue = topRightInputBox.value != "" ? topRightInputBox.value : 0;
    bottomLeftValue = bottomLeftInputBox.value != "" ? bottomLeftInputBox.value : 0;
    bottomRightValue = bottomRightInputBox.value != "" ? bottomRightInputBox.value : 0;


    boxElement.style.borderRadius = topLeftValue + "px "
        + topRightValue + "px "
        + bottomRightValue + "px "
        + bottomLeftValue + "px ";
}

topLeftInputBox.addEventListener("input", NumbersOnlyAllowed)

function NumbersOnlyAllowed(){
    this.value = this.value.replace(/[^0-9]/g, '');
}