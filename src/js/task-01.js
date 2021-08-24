const getCategoriesQuantity = document.querySelectorAll('h2');
console.log(`В списке ${getCategoriesQuantity.length} категории`);

const getAllElements = document.querySelectorAll('.item');

getAllElements.forEach(elem => {
    const title = elem.querySelector('h2').innerText
    const elems = elem.querySelectorAll('li').length
    console.log(`Категория ${title}\nКоличество элементов ${elems}`)
}
)