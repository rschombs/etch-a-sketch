
let size = parseInt(prompt("How many cells per side"));
let activeColor = "black";
for (i = 0; i < size; i++) {

    const container = document.querySelector('.container');
    const row = document.createElement('div')
    row.classList.add('row');
    row.setAttribute('style', `min-height: ${960/size}px`);
    container.appendChild(row);
    
    for (j = 0; j < size; j++) {
        const container = document.querySelector('.container');
       const square = document.createElement('div');
       square.classList.add('cell');
       row.appendChild(square);
      
    }

}

const active = document.querySelectorAll('.cell');

let holding = false;

active.forEach((box) => {

    box.addEventListener('mousedown', function (e) {
        holding = true;
    })

    box.addEventListener('mouseup', function (e) {
        holding = false;
    })

    box.addEventListener('mousemove', function (e) {
        if (holding==true) {
        e.target.style.background = activeColor;
        }

});

});

const colorRed = document.getElementById('red');
colorRed.addEventListener('mousedown', function (e) {
    activeColor = "red";
})

const colorBlue = document.getElementById('blue');
colorBlue.addEventListener('mousedown', function (e) {
    activeColor = "blue";
})

const colorYellow = document.getElementById('yellow');
colorYellow.addEventListener('mousedown', function (e) {
    activeColor = "yellow";
})

const colorGreen = document.getElementById('green');
colorGreen.addEventListener('mousedown', function (e) {
    activeColor = "green";
})

const colorPurple = document.getElementById('purple');
colorPurple.addEventListener('mousedown', function (e) {
    activeColor = "purple";
})

const colorWhite = document.getElementById('white');
colorWhite.addEventListener('mousedown', function (e) {
    activeColor = "white";
})

const colorOrange = document.getElementById('orange');
colorOrange.addEventListener('mousedown', function (e) {
    activeColor = "orange";
})
