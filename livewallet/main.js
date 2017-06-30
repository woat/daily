const walletInput = document.getElementById('wallet');
const wallets = document.getElementById('wallets');
const search = document.getElementById('search');

// function walletBoxes(btc, usd, address) {
//   this.btc = btc;
//   this.usd = usd;
//   this.address = address;
//   // delete + box 'unique' id for target
//   this.deleteId = `delete${address}`;
//   this.boxId = `box${address}`;
//   this.deleteBox = () => {
//     document.getElementById(this.boxId).remove();
//   };
//   this.template = `
//     <div id="${this.boxId}" class="columns">
//       <div class="column is-6 is-offset-3">
//         <div class="box has-text-centered">
//           <a id="${this.deleteId}" class="delete is-pulled-right"></a>
//           <h1 class="title is-1">${btc} BTC</h1>
//           <h1 class="subtitle is-3">$${usd} USD</h1>
//           <br>
//           <h1 class="title is-5"><em>${address}</em></h1>
//         </div>
//       </div>
//     </div>
//   `;
//   this.deleteButton = document.getElementById(this.deleteId);
//   this.wallets = document.getElementById('wallets');
// }

function generateBox(btc, usd, address) {
  wallets.innerHTML += `
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="box has-text-centered">
          <a class="delete is-pulled-right"></a>
          <h1 class="title is-1">${btc} BTC</h1>
          <h1 class="subtitle is-3">$${usd} USD</h1>
          <br>
          <h1 class="title is-5"><em>${address}</em></h1>
        </div>
      </div>
    </div>
  `;
}

function displayWallet(input) {
// displays info onto div
// calls pullwallet to obtain btc + usd
  const wallet = pullWallet(input);
  return wallet
    .then((data) => {
      // btc[0], usd[1]
      const btc = `${data[0].toString().substring(1, data[0].length - 8)}.${data[0].toString().substring(1)}`;
      const usd = `${parseInt(btc * data[1]).toLocaleString()}`
      generateBox(btc, usd, input);
    });
}

function pullWallet(address) {
  const fetchBTC = fetch(`https://blockchain.info/q/getreceivedbyaddress/${address}?cors=true`).then(data => data.json());
  const fetchUSD = fetch('https://blockchain.info/q/24hrprice?cors=true').then(data => data.json());
  return Promise.all([fetchBTC, fetchUSD]);
}

search.addEventListener('click', () => {
  displayWallet(walletInput.value);
});
