const categories = document.querySelector('#categories');
const categoriesItems = [...document.querySelectorAll('.item h2')];
const categoriesNames = categoriesItems.map((item) => item.innerText);
const categoriesItemsList = [...document.querySelectorAll('.item ul')];

function getNumbersOfChildren(array) {
  return array.children.length;
}

function consoleLogResult() {
  console.log(`Number of categories: ${getNumbersOfChildren(categories)}
  
  `);
  for (let i = 0; i < categoriesNames.length; i++) {
    console.log(`Category: ${categoriesNames[i]}
    Elements: ${getNumbersOfChildren(categoriesItemsList[i])}
    
    `);
  }
}
consoleLogResult();
