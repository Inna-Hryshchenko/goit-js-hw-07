const counterValue = document.querySelector('span')
console.log(counterValue)

const button = document.querySelector("button");
console.log(button)

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);

// function increment() {
    
// }

// function decrement() {
    
// }

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
