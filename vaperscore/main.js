/*
const productFader = new Vue({
  el: '#productFader',
  data: {
    product: 'modulo'
  }
})
*/

document.addEventListener('DOMContentLoaded', function() {
  const productFader = document.getElementById('productFader');

  products = ['mod', 'tank', 'battery'];
  let i = 1;

  function span(text) {
    const newSpan = document.createElement('span');
    newSpan.classList.add('animated', 'fadeInDown');
    newSpan.innerHTML = text;
    return newSpan;
  }

  function fader() {
    productFader.removeChild(productFader.firstChild);
    productFader.appendChild(span(products[i]));
    i += 1;
    if (i === products.length) {
      i = 0;
    }
  }
  setInterval(fader, 2100);
})
