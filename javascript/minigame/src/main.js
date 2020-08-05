// Fetch the items from the JSON file
function loadItems() {
  return fetch('../data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const { key, value } = dataset;
  if (key === undefined || value === undefined) {
    return;
  }
  const filted = items.filter((item) => item[key] === value);
  displayItems(filted);
  //   updateItems(items, key, value);
}

// function updateItems(items, key, value) {
//   items.forEach((item) => {
//     if (item.dataset[key] === value) {
//       item.classList.remove('invisible');
//     } else {
//       item.classList.add('invisible');
//     }
//   });
// }

function setEventListners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.btns');
  logo.addEventListener('click', () => {
    displayItems(items);
  });
  buttons.addEventListener('click', (e) => onButtonClick(e, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListners(items);
  })
  .catch(console.log);
