const container = document.getElementById("container");
rows = document.getElementsByClassName("gridRow");
cells = document.getElementsByClassName("gridColumn");

myGrid();

function myGrid(){
    makeRows(16);
    makeColumns(16);
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
function mouseOver(){
    if (document.getElementsByClassName("gridColumn").onmouseover = "true"){
        return this.style.backgroundColor = "grey";
    };
};