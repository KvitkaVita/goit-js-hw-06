let counterValue = 0;
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);

const span = document.querySelector("#value");

const decrement = () => {
    counterValue -= 1
    document.getElementById("value").textContent = counterValue;
}

const increment = () => {
    counterValue += 1
    document.getElementById("value").textContent = counterValue;
}


btnDecrement.addEventListener("click", decrement)
btnIncrement.addEventListener("click", increment)

console.log(counterValue)
console.log(btnDecrement)
console.log(btnIncrement)

// Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.