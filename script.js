const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.open');
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const ul = document.querySelector("ul")


closeButton.addEventListener('click',() => {
    console.log(closeButton);
    console.log(openButton);
    circle.classList.remove('active');

    console.log(circle);
    container.classList.remove('active');
    // circle.style.transform = 'rotate(0deg)';
    // container.style.transform = 'rotate(0deg)'
    ul.style.left = -95+"px";
    
});
openButton.addEventListener('click',() => {
    console.log(openButton);
    circle.classList.add('active');
    console.log(circle);
    container.classList.add('active');
    // circle.style.transform = 'rotate(180deg)';
    // container.style.transform = 'rotate(-10deg)';
    ul.style.left = 0+'px';
}) 