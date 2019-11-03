const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridColumn");
let userInputRows = prompt("How many rows and columns do you want?")

myGrid(userInputRows);

function myGrid(userInputRows){
    makeRows(userInputRows);
    makeColumns(userInputRows);
};
function makeRows(rowNumber){
    for (let j = 0; j < rowNumber; j++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};
function makeColumns(columnNumber){
    for (let i = 0; i < rows.length; i++){
        for (let x = 0; x < columnNumber; x++){
            let column = document.createElement("div");
            rows[x].appendChild(column).className = "gridColumn";
        };
    };
};
