const body = document.querySelector("body")
// const input = document.createElement("input")
// input.setAttribute("type", "number")
const container = document.querySelector(".container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.border = "2px solid black"
body.style.margin = "0px"

//container.style.gap = "5px"

// 16x16 square grid
for (let i = 0; i <16; i++) {
    const row = document.createElement("div")
    row.style.display = "flex"
    row.style.border = "2px solid black"
    //row.style.height = "100px"
    row.style.flex = "auto"
    
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div")
        square.setAttribute("id", `square(${i},${j})`)
        square.style.height = "50px"
        square.style.width = "50px"
        square.style.border = "2px solid black"
        square.style.flex = "auto"
        
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"
        })
        // square.addEventListener("mouseout", () => {
        //     square.style.backgroundColor = "white"
        // })

        row.appendChild(square)
        }
    container.appendChild(row)
}

// body.appendChild(input)