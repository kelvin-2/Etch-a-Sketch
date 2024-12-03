const rowInput=document.getElementById('rows-input');
const colsInput=document.getElementById('cols-input');
const generateBtn=document.getElementById('generate-btn');
const gridContainer=document.getElementById('grid-container');


function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


function createGrid(rows,cols)
{
    gridContainer.innerHTML='';
    gridContainer.style.gridTemplateColumns='repeat(${cols},100px)';
    gridContainer.style.gridTemplateRows='repeat(${rows},100px)';


    for(let i=0;i<rows*cols;i++){
        const gridItem=document.createElement('div');

        gridItem.classList.add('grid-item');
        gridItem.textContent='Grid${i+1}';
        gridItem.addEventListener('mouseenter',()=>{
            gridItem.style.backgroundColor=getRandomColor();
        });
        gridItem.addEventListener('mouseleave',()=>{
            gridItem.style.backgroundColor='#3498db';
        });
        gridContainer.appendChild(gridItem);
    }
}
generateBtn.addEventListener('click',()=>{
    const rows=parseInt(rowInput.value);
    const cols=parseInt(colsInput.value);
    if(isNaN(rows)||isNaN(cols)||rows<1||cols<1||rows>20||cpls>20){
        alert('Please enter valid numbers betwee 1 and 20 rows and columns.');
        return;
    }
    createGrid(rows,cols)
});
createGrid(4,4)