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


function showSectionById(id){
    document.getElementById('mew-history').classList.add('hidden');
    document.getElementById('dekh-shala-moja').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}