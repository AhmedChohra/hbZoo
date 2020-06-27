const remote = require('electron').remote;
const formAnimalName = document.getElementById("animal-name");
const formAnimalSize = document.getElementById("animal-size");
const formAnimalWeight = document.getElementById("animal-weight");
const formAnimalDesc = document.getElementById("animal-desc");
const formAnimalPic = document.getElementById("animal-pic");



//selectionne l'élément dans le html
let validation = document.querySelector("#validation");

//au clic récupère les valeurs du formulaire et les stock dans le localstorage
validation.addEventListener('click', () => {
    /*console.log('name: ' + formAnimalName.value +
        ' size: ' + formAnimalSize.value +
        ' weight: ' + formAnimalWeight.value +
        ' description: ' + formAnimalDesc.value +
        ' picture: ' + formAnimalPic.value)*/

    let element = {
        name: formAnimalName.value,
        size: formAnimalSize.value,
        weight: formAnimalWeight.value,
        description: formAnimalDesc.value,
        picture: formAnimalPic.value
    }

    let elementsArray = [];

    if (localStorage.getItem('elements') != null) {
        elementsArray = JSON.parse(localStorage.getItem('elements'));
    }

    elementsArray.push(element)

    localStorage.setItem('elements', JSON.stringify(elementsArray));
    remote.getCurrentWindow().getParentWindow().send('on-validation');
    window.close();
});
