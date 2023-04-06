const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

function createListItems(arr) {
  arr.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    listItem.classList.add('item');
    list.appendChild(listItem);
  });
}

createListItems(ingredients);
