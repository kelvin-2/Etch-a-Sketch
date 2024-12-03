const rowInput = document.getElementById('rows-input');
const colsInput = document.getElementById('cols-input');
const generateBtn = document.getElementById('generate-btn');
const gridContainer = document.getElementById('grid-container');
let isDrawing = false;

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createGrid(rows, cols) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 100px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 100px)`;

    // Add event listeners to enable/disable drawing mode
    gridContainer.addEventListener('mousedown', () => {
        isDrawing = true;
    });

    gridContainer.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    gridContainer.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');

        gridItem.classList.add('grid-item');
        gridItem.dataset.originalColor = '#3498db';

        gridItem.addEventListener('mouseenter', (e) => {
            // If drawing mode is active, color the square
            if (isDrawing) {
                gridItem.style.backgroundColor = getRandomColor();
            }
        });

        gridContainer.appendChild(gridItem);
    }
}

generateBtn.addEventListener('click', () => {
    const rows = parseInt(rowInput.value);
    const cols = parseInt(colsInput.value);
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1 || rows > 20 || cols > 20) {
        alert('Please enter valid numbers between 1 and 20 for rows and columns.');
        return;
    }
    createGrid(rows, cols);
});

// Initial grid creation
createGrid(4, 4);