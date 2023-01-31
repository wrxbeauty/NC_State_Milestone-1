const btnSelector = document.querySelectorAll('.pegs')

let final = randomMaster();
const colors = ['pink', 'coral', 'orange', 'yellow'];

function randomMaster() {
    const final = [...new Array(3)].map(color => {
        const random = Math.floor(math.random() * Math.floor(colors.length))
        return colors[random];
    })
    console.log(final)
    return final;
}

btnSelector.forEach(btn => {
    const color = btn.classList[1];
    btn.addEventListener('click', () => selectColor(color))
})

function selectColor(color) {
    console.log(color)
}



// function masterMain() {
//     let pegs = document.getElementById('pegs')
//     pegs.forEach(peg => {
//         peg.value
        
//     });

// }

// function newSequence() {

// }

// newGrid({
//     rows: 3,
//     colors: 4,
//         colors : ['pink', 'coral', 'orange', 'yellow']
// })