console.log("Script Started")

function changeStyle() {
    console.log("click");

    //Get the p element and store in a variable
    let p = document.getElementById("text");
    p.innerText = "Style has been changed!";

    //Style some text
    p.style.color = "red";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "cornFlowerBlue";
}

function resetStyle() {
    console.log("click");
    let p = document.getElementById("text");

    //reset text style
       p.style.color = "";
    p.style.fontSize = "";
    p.style.textAlign = "";
    p.style.backgroundColor = "";
}

function changeStyle2() {
    console.log("click");
}