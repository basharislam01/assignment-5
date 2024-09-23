function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNmber = parseFloat(inputValue);
    return inputNmber;
}

function getTextFieldValueById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNmber = parseFloat(inputValue);
    return inputNmber;
}