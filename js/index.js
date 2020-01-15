// Your code goes here


//mouseenter/mouseleave transform middle images size 
let middleImages = document.querySelectorAll(".img-content");

//1. mouse enter, increase scale
middleImages.forEach (currentVal => {
    currentVal.addEventListener("mouseenter", () => {
        currentVal.style.transform = "scale(1.1)";
        currentVal.style.transition = "transform 0.3s";
    });
});

//2. mouse leave, bring it back to normal scale
middleImages.forEach (currentVal => {
    currentVal.addEventListener("mouseleave", () => {
        currentVal.style.transform = "scale(1.0)";
    });
});

//click on paragraphs to bold them/or increase size
let paragraphs = document.querySelectorAll("p");

//3. click, bold paragraphs
paragraphs.forEach (currentVal => {
    currentVal.addEventListener("click", (event) => {
        currentVal.style.fontWeight = "bold";
        event.stopPropagation(); //stop propagation from other click event below
    });
});

//click the destination boxes add border
let destinationBoxes = document.querySelectorAll(".destination");

destinationBoxes.forEach(currentVal => {
    currentVal.addEventListener("click", () => {
        currentVal.style.border = "2rem dotted #add8e6";
    });
});

//wheel, changes background color of nav when you scroll mouse on body of page
let nav = document.querySelector(".nav-container");
let body = document.querySelector("body");

//4. wheel, change color of nav
body.addEventListener("wheel", () => {
  nav.style.backgroundColor = "#add8e6";
  nav.style.transition = "transform 5s";
});

//right-click removes image from page
let imgs = document.querySelectorAll("img");

//5. contextmenu, removes images from page when right-clicked
imgs.forEach(currentVal => {
    currentVal.addEventListener("contextmenu", () => {
        currentVal.style.display = "none";
    });
});

//copy, makes what was copied to clipboard all caps
let introParagraph = document.querySelector(".intro p");

//6. copy, turn clipboard text into all uppercase
introParagraph.addEventListener("copy", (event) => {
    let selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});


//7. doubleclick, update background color for headers
const headers = document.querySelectorAll("h1, h2, h4");
headers.forEach (currentVal => {
    currentVal.addEventListener("dblclick", () => {
        currentVal.style.backgroundColor = "#add8e6";
    });
});


//8. drag, add a border to dragged image
imgs.forEach(currentVal => {
    currentVal.addEventListener("drag", () => {
        currentVal.style.border = "1rem solid yellow";
    });
});

//9. dragend, remove border of dragged image after drag has ended
imgs.forEach(currentVal => {
    currentVal.addEventListener("dragend", () => {
        currentVal.style.border = "none";
    });
});

//10. keydown, when any key is hit, pop up an alert box to the screen
document.addEventListener("keydown", () => {
    window.alert("Did you mean to hit that?");
});

//stop default nav
let stopDefaultNav = document.querySelectorAll(".nav-link");

stopDefaultNav.forEach(currentVal => {
    currentVal.addEventListener("click", (event) => {
        event.preventDefault();
    });
});