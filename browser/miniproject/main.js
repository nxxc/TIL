const input = document.querySelector('.input');
const ul = document.querySelector('.contents');
const button = document.querySelector('.plus');

const makeTodo = () => {
  if (input.value === '') {
    return;
  }
  const li = document.createElement('li');
  const removeButton = document.createElement('button');

  li.innerText = input.value;
  removeButton.innerText = 'remove';
  removeButton.setAttribute('class', 'remove');
  removeButton.innerHTML = `<i class="fa fa-trash-o">`;

  li.append(removeButton);

  removeButton.addEventListener('click', () => {
    ul.removeChild(li);
  });
  ul.appendChild(li);

  input.value = '';
};

addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    makeTodo();
  }
});

button.addEventListener('click', (e) => {
  makeTodo();
});
