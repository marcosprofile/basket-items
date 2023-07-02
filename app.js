const items = document.getElementById('count');
const precoItem1 = document.getElementById('preco-1');
const precoItem2 = document.getElementById('preco-2');
const precoItem3 = document.getElementById('preco-3');
const quantidadeItem1 = document.getElementById('1');
const quantidadeItem2 = document.getElementById('2');
const quantidadeItem3 = document.getElementById('3');
const compraTaxa = document.getElementById('compra-taxa');
const totalAmount = document.getElementById('total-amount');

const modal = document.getElementById('modal-payment');
const btnPayment = document.getElementById('btn-payment');

const item1 = 48.00;
const item2 = 32.00;
const item3 = 38.00;
const tax = 28.00;
let totalItem1 = 1;
let totalItem2 = 1;
let totalItem3 = 1;
let itemsBasket = totalItem1 + totalItem2 + totalItem3;

precoItem1.textContent = `$${item1}`;
precoItem2.textContent = `$${item2}`;
precoItem3.textContent = `$${item3}`;
compraTaxa.textContent = `$${tax}`;
quantidadeItem1.textContent = totalItem1;
quantidadeItem2.textContent = totalItem2;
quantidadeItem3.textContent = totalItem3;
items.textContent = itemsBasket;

let amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
totalAmount.textContent = `$${amount}`;

/* MODAL */
function checkout(param) {
  if (param == closed) {
    modal.classList.add('ocultar-modal');
    modal.classList.remove('checkout');
  }
  if (param !== closed) {
    modal.classList.add('checkout');
    modal.classList.remove('ocultar-modal');
  }
}

btnPayment.textContent = `Pay $${amount}`;

function adicionar(id) {
  if (id === 1 && totalItem1 > 0 && totalItem1 < 10) {
    totalItem1++;
    itemsBasket++;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  } else if (id === 2 && totalItem2 > 0 && totalItem2 < 10) {
    totalItem2++;
    itemsBasket++;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  } else if (id === 3 && totalItem3 > 0 && totalItem3 < 10) {
    totalItem3++;
    itemsBasket++;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  }

  quantidadeItem1.textContent = totalItem1;
  quantidadeItem2.textContent = totalItem2;
  quantidadeItem3.textContent = totalItem3;
  items.textContent = itemsBasket;
  totalAmount.textContent = `$${amount}`;
  btnPayment.textContent = `Pay $${amount}`;
}

function remover(id) {
  if (id === 1 && totalItem1 > 1) {
    totalItem1--;
    itemsBasket--;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  } else if (id === 2 && totalItem2 > 1) {
    totalItem2--;
    itemsBasket--;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  } else if (id === 3 && totalItem3 > 1) {
    totalItem3--;
    itemsBasket--;
    amount = (item1 * totalItem1) + (item2 * totalItem2) + (item3 * totalItem3) + tax;
  }

  quantidadeItem1.textContent = totalItem1;
  quantidadeItem2.textContent = totalItem2;
  quantidadeItem3.textContent = totalItem3;
  items.textContent = itemsBasket;
  totalAmount.textContent = `$${amount}`;
  btnPayment.textContent = `Pay $${amount}`;
}