function createGrid(contain,squares) {

    const newDiv = document.createElement('div');
    newDiv.classList.add('gridSquare');
    contain.appendChild(newDiv);

}


const button = document.querySelector('button');
const container = document.querySelector('#container');

console.log(container.firstChild)

button.addEventListener('click', () => {
    const val = prompt('How many squares do you want?');
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.firstElementChild);
        }
    }
    for(let i = 0; i < val; i++){
        createGrid(container,val);
    }
})