const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


ingredients.forEach(elem => {
  const ingredientsItem = document.createElement("li");
  console.log(ingredientsItem)
  ingredientsItem.textContent = elem
  document.querySelector('ul').append(ingredientsItem)
}
)