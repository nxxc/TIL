const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 1.사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2.새로운 아이템들 만들기
  const item = createItem(text);
  // 3.items 컨테이너 안에 만든것들 추가
  items.append(item);
  item.scrollIntoView({
    block: 'center',
  });
  // 4.인풋 초기화 & 포커스
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      items.removeChild(itemRow);
    }
  });
  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.innerText = text;

  const deletBtn = document.createElement('button');
  deletBtn.setAttribute('class', 'item__delete');
  deletBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  const divider = document.createElement('div');
  divider.setAttribute('class', 'item__divider');

  itemRow.appendChild(item);

  item.appendChild(name);
  item.appendChild(deletBtn);

  itemRow.appendChild(divider);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});
