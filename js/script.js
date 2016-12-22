
function createH1(text) {
  var h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode(text));
  return h1;  
}  

function createDiv(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div;  
}  

function createInput(text) {
  var input = document.createElement('input');
  input.type = 'checkbox';
  return input;  
}

function createLabel(text) {
  var label = document.createElement('p');
  label.appendChild(document.createTextNode(text));
  return label;
}

function createButton(text) {
  var button = document.createElement('input');
  button.type = 'button';
  button.value = 'Проверить мои результаты';
  return button;
}

var elements = [
  createH1('Тест по программированию'),
  createDiv('1. Вопрос №1'),
  createInput(),
  createLabel('Вариант ответа №1'),
  createInput(),
  createLabel('Вариант ответа №2'),
  createInput(),
  createLabel('Вариант ответа №3'),
  createDiv('2. Вопрос №2'),
  createInput(),
  createLabel('Вариант ответа №1'),
  createInput(),
  createLabel('Вариант ответа №2'),
  createInput(),
  createLabel('Вариант ответа №3'),
  createDiv('3. Вопрос №3'),
  createInput(),
  createLabel('Вариант ответа №1'),
  createInput(),
  createLabel('Вариант ответа №2'),
  createInput(),
  createLabel('Вариант ответа №3'),
  createButton()
];

var docFrag = document.createDocumentFragment();
for(var i = 0; i < elements.length; i++) {
  docFrag.appendChild(elements[i]);
}

document.body.appendChild(docFrag);

//var body = document.querySelector('body');
//body.appendChild(title, q1, c1);
//body.appendChild(q1);
//body.appendChild(c1);
//body.appendChild(label1);
//body.appendChild(c2);
//body.appendChild(label2);
//body.appendChild(c3);
//body.appendChild(label3);

