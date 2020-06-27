const { BrowserWindow } = require('electron').remote;
const { ipcRenderer } = require('electron');
const remote = require('electron').remote;

const addBtn = document.querySelector("#add-item");

addBtn.addEventListener('click', () => {
    console.log("clic")
    let winAddElement = new BrowserWindow({
        width: 800,
        height: 600,
        parent: remote.getCurrentWindow(),
        webPreferences: {
            nodeIntegration: true
        }
    })
    winAddElement.loadFile("app/add-element/add-element.html")
});

function getElements() {
    elementsArray = JSON.parse(localStorage.getItem('elements'));
    for (let element of elementsArray) {
        let html = `<div class="card mt-3 d-flex ">
        <img id="element" class="card-img-top"
            src="${element.picture}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title  d-flex justify-content-center">${element.name}</h5>
            <ul>
                <li>${element.size} cm</li>
                <li>${element.weight} kg</li>
            </ul>

            <p class="card-text text-center">${element.description}</p>
        </div>
    </div>`;
        document.querySelector("#elements").innerHTML += html;
    }
}

if (localStorage.getItem('elements') != null) {
    getElements();
}

ipcRenderer.on('on-validation', () => {
    alert("Vous avez ajouter un animal.")
    html = "";
    document.querySelector("#elements").innerHTML = html;
    getElements();
});