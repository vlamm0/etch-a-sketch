// creates grid, automatically set to 16x16 but can be modified by passing a number for numberxnumber grid
function getGrid(dim = 16) {
    // create rows
    for (let i = 0; i <dim; i++) {
        const row = document.createElement("div")
        row.style.display = "flex"
        row.style.flex = "auto"
        
        // create squares for each row (effectively making columns)
        for (let j = 0; j < dim; j++) {
            const square = document.createElement("div")
            square.style.width = "50px"
            square.style.flex = "auto"
            // event for drawing
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black"
            })

            row.appendChild(square)
            }
        container.appendChild(row)
    }

}
// Main code
const body = document.querySelector("body")
const btn = document.createElement("button")
btn.textContent = "Change Dimensions"
const container = document.querySelector(".container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.border = "2px solid black"
container.style.height = "960px"
body.style.margin = "0px"

//change dimensions
btn.addEventListener("click", () => {
    let dimensions = prompt("Enter dimensions, for 16 rows and columns type '16'");
    if (dimensions != null) {
        container.innerHTML = "";
        dimensions = Number(dimensions)
        if (dimensions > 100) {dimensions = 100} 
        getGrid(dimensions)
    }
})
getGrid()

body.insertBefore(btn, container)