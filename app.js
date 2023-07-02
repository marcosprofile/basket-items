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
let quant1 = 1;
let quant2 = 1;
let quant3 = 1;
let itemsBasket = quant1 + quant2 + quant3;

precoItem1.textContent = `$${item1}`;
precoItem2.textContent = `$${item2}`;
precoItem3.textContent = `$${item3}`;
compraTaxa.textContent = `$${tax}`;
quantidadeItem1.textContent = quant1;
quantidadeItem2.textContent = quant2;
quantidadeItem3.textContent = quant3;
items.textContent = itemsBasket;

let amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
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
  if (id === 1 && quant1 > 0 && quant1 < 10) {
    quant1++;
    itemsBasket++;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  } else if (id === 2 && quant2 > 0 && quant2 < 10) {
    quant2++;
    itemsBasket++;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  } else if (id === 3 && quant3 > 0 && quant3 < 10) {
    quant3++;
    itemsBasket++;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  }

  quantidadeItem1.textContent = quant1;
  quantidadeItem2.textContent = quant2;
  quantidadeItem3.textContent = quant3;
  items.textContent = itemsBasket;
  totalAmount.textContent = `$${amount}`;
  btnPayment.textContent = `Pay $${amount}`;
}

function remover(id) {
  if (id === 1 && quant1 > 1) {
    quant1--;
    itemsBasket--;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  } else if (id === 2 && quant2 > 1) {
    quant2--;
    itemsBasket--;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  } else if (id === 3 && quant3 > 1) {
    quant3--;
    itemsBasket--;
    amount = (item1 * quant1) + (item2 * quant2) + (item3 * quant3) + tax;
  }

  quantidadeItem1.textContent = quant1;
  quantidadeItem2.textContent = quant2;
  quantidadeItem3.textContent = quant3;
  items.textContent = itemsBasket;
  totalAmount.textContent = `$${amount}`;
  btnPayment.textContent = `Pay $${amount}`;
}