const rowInput=document.getElementById('rows-input');
const colsInput=document.getElementById('cols-input');
const generateBtn=document.getElementById('generate-btn');
const gridContainer=document.getElementById('grid-container');


function getRandomColor(){
    return '#${Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')}';
}

function createGrid(rows,cols)
{
    gridContainer.innerHTML='';
    gridContainer.style.gridTemplateColumns='repeat(${cols},100px)';
    gridContainer.style.gridTemplateRows='repeat(${rows},100px)';
}