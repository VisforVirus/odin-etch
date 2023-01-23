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

function changeColour(square) {
    let val = 0;
    const vals = [];
    for (let i = 0; i < 3; i++) {
        vals.push(Math.floor(Math.random() * 255) + 1);
    }

    square.style.backgroundColor = 'rgb(' + vals[0] + ',' + vals[1] + ',' + vals[2] + ')';
    //console.log(...vals)
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
        createGrid('#container','gridSquareContainer');//Row
        for (let i = 0; i < val; i++){
            gridX('.gridSquareContainer','gridSquare',q);//Column
        }
    }

    const grid = document.querySelectorAll('.gridSquare');

    grid.forEach(element => {
        element.addEventListener('mouseover',  (e) => {
            changeColour(e.target)
        })
    });
})

