const start = document.getElementById('start')
start.addEventListener('click', randomMaster)

const pegs = document.getElementById('pegs')
let rowNumber = 1
let selectedColor
// console.log(pegs)
let choices = []
let currentRow = []

for (const child of Array.from(pegs.children)) {
    // console.log(child)
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
    console.log('choices', choices)
    const row1 = document.getElementById(`row-${rowNumber}`)
    Array.from(row1.children).forEach((child, i) => {
        // console.log(child)
        child.style.backgroundColor = choices[i]
    })
    if (compareArray(choices, final)) {
        console.log('You Win')
        revealFinal()
    }
    choices = []
    rowNumber++
}

 function changeCurrentColor() {
    let fill = document.querySelector('#pegs buttons')
    
    fill.addEventListener('click', () => {
        guessRow()
    })
}

function compareArray(a, b) {
    if (a.length !== b.length) return false
  
    a.sort()
    b.sort()
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  function revealFinal() {
    const masterRow = document.getElementById('master')
    Array.from(masterRow.children).forEach((child, i) => {
      child.style.backgroundColor = final[i]
    })
  }