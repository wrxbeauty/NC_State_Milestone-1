const start = document.getElementById('start')
start.addEventListener('click', randomMaster)

const pegs = document.getElementById('pegs')
let rowNumber = 1
let selectedColor
console.log(pegs)
let choices = []

for (const child of Array.from(pegs.children)) {
    console.log(child)
    child.addEventListener('click', (e) => {
        selectedColor = e.target.classList[0]
        choices.push(selectedColor)
        if (choices.length === 3) {
            guessRow()
        }
        
    })
}

const colors = ['#d65db1', '#ff6f91', '#ff9671', '#f9f871'];
let final = randomMaster();

function randomMaster() {
    const final = [...new Array(3)].map(color => {
        const random = Math.floor(Math.random() * Math.floor(colors.length))
        return colors[random];
    })
    console.log(final)
    return final;
}

function guessRow() {
    console.log(choices)
    const row1 = document.getElementById(`row-${rowNumber}`)
    Array.from(row1.children).forEach((child, i) => {
        console.log(child)

        child.getElementsByClassName.backgroundColor = choices[i]
    })
    choices = []
    rowNumber++
}

 function changeCurrentRow(pegs) {
    let fill = document.querySelector('colors')
    
    fill.addEventListener('click', (e) => {
        
    })
    
}

function compare(dot, final) {
    if(dot.colors === final){
        return true = ('You Win');
    }
    return false;
}

