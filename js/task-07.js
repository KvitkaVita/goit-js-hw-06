// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
    input: document.querySelector("input"),
    span: document.querySelector("span"),
}

refs.span.classList.add("text-style");

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
refs.span.style.fontSize = event.currentTarget.value;
}




