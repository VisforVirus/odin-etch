function createGrid(contain,className) { 
    const cont = document.querySelector(contain);
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);
    
    cont.appendChild(newDiv);
}

function gridX(contain,className,squares) {
    const cont = document.querySelectorAll(contain);
    const newDiv = document.createElement('div');
    newDiv.classList.add(className);

    cont[squares].appendChild(newDiv);
    console.log(cont[squares]);

}

const button = document.querySelector('button');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
    const val = prompt('How many squares do you want?');
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.firstElementChild);
        }
    }

    for(let q = 0; q < val; q++){
        createGrid('#container','gridSquareContainer');
        for (let i = 0; i < val; i++){
            gridX('.gridSquareContainer','gridSquare',q);
        }
    }
})

