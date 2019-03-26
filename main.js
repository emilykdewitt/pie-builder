const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addIngredient = () => {
    const inputText = inputIngredient.nodeValue;
    console.log(inputText);
}

const eventListeners = () => {
    addButton.addEventListener('click', addIngredient);
};

const init = () => {
    eventListeners();
};

init();