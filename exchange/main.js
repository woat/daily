const submit = document.getElementById('submitRate');
const input = document.getElementById('inputCurrency');
const dvTable = document.getElementById('dvTable');
const convert = document.getElementById('convert');
const baseCu = document.getElementById('baseCu');
const baseAm = document.getElementById('baseAm');
const targetCu = document.getElementById('targetCu');
const submitConvert = document.getElementById('submitConvert');
const targetDropdown = document.getElementById('targetDropdown');
const baseDropdown = document.getElementById('baseDropdown');

function createTargetDropdown(currencies, dropdown) {
  dropdown.innerHTML = '';
  currencies.map(currency => dropdown.innerHTML += `<option value="target-${currency}">${currency}</option>`)
}

function displayDropdown(dropdown) {
  const exchange = fetch('http://api.fixer.io/latest');
  return exchange
    .then(response => response.json())
    .then(response => response.rates)
    .then(response => Object.keys(response))
    .then(response => createTargetDropdown(response, dropdown))
}

displayDropdown(targetDropdown);
displayDropdown(baseDropdown);

function callApi(baseCurrency) {
  const exchange = fetch(`http://api.fixer.io/latest?base=${baseCurrency}`);
  return exchange;
}

function getExchange(baseCurrency, baseAmount, targetCurrency) {
  const exchange = callApi(baseCurrency);
  let rate;

  return exchange
    .then(response => response.json())
    .then((response) => {
      const objEnt = Object.entries(response.rates);
      // Returns array of array, reduce to flatten - possible opt?
      return objEnt.filter(res => res[0] === targetCurrency).reduce((a, b) => a.concat(b));
    })
    .then((res) => {
      rate = res[1];
      const finalPrice = baseAmount * rate;
      return finalPrice;
    })
    .catch(err => console.log(Error(err)));
}

function displayConvert(baseCurrency, baseAmount, targetCurrency) {
  getExchange(baseCurrency, baseAmount, targetCurrency)
    .then(price => convert.innerHTML = price);
}

function displayRates(currency) {
  console.log(currency)
  const exchange = callApi(currency);
  const exch = [];

  exchange
    .then(response => response.json())
    .then((response) => {
      // Put data into array for table
      Object.entries(response.rates).forEach(entry => exch.push(entry));
      return exch;
    })
    .then((rates) => {
      // Create table
      const table = document.createElement('table');
      table.classList.add('table');
      // Create header
      const header = table.createTHead();
      const trow = header.insertRow(0);
      const cellOne = document.createElement('th');
      const cellTwo = document.createElement('th');
      cellOne.innerHTML = 'Currency';
      cellTwo.innerHTML = 'Rate';
      trow.appendChild(cellOne);
      trow.appendChild(cellTwo);
      // Create body
      const body = table.createTBody();
      rates.forEach((rate) => {
        // Push data to body
        const row = body.insertRow(-1);
        const cell = row.insertCell(-1);
        const cell2 = row.insertCell(-1);
        cell.innerHTML = rate[0];
        cell2.innerHTML = rate[1];
      });
      dvTable.innerHTML = '';
      dvTable.appendChild(table);
    });
}

submit.addEventListener('click', () => {
  const baseCurren = input.value;
  displayRates(baseCurren);
});

submitConvert.addEventListener('click', () => {
  const base = baseDropdown.value.split('-')[1];
  const amount = baseAm.value;
  const target = targetDropdown.value.split('-')[1];

  displayConvert(base, amount, target);
});

