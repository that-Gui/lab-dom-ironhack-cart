// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quatity = product.querySelector('input').value;
  let subtotal = price * quatity;
  let subtotalspan = product.querySelector('.subtotal span');
  subtotalspan.innerHTML = subtotal;

  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let index = 0; index < allProducts.length; index++) {
    totalValue += updateSubtotal(allProducts[i]);
    
  }
  // ITERATION 3
  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target.parentNode.parentNode);
  //let downwards = document.querySelector('.tbody target');
  let rowToRemove = target.parentNode.parentNode;
  let parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);

}

// ITERATION 5

function createProduct() {
  let newName = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type="number"]');
  let fixedPrice = Number(newPrice.value).toFixed(2);

  let newRow = `<tr class="product">
  <td class="name">
    <span>${newName.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let removeButtons = document.getElementsByClassName(' btn-remove');
  for (let index = 0; index < removeButtons.length; index++) {
    removeButtons[i].addEventListener('click', removeProduct);
    
  }

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
  //... your code goes here
});
