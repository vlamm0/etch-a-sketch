const body = document.querySelector("body")
const container = document.querySelector(".container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.gap = "5px"

// 16x16 square grid
for (let i = 0; i <16; i++) {
    const row = document.createElement("div")
    row.style.display = "flex"
    row.style.border = "2px solid black"
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div")
        square.style.height = "50px"
        square.style.width = "50px"
        square.style.border = "2px solid black"
        //square.style.flexGrow = 1
        row.appendChild(square)
    }
    container.appendChild(row)
}