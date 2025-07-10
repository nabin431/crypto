async function fetchCryptoData() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  const data = await response.json();
  const tbody = document.getElementById("crypto-body");
  tbody.innerHTML = "";

  data.forEach(coin => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${coin.name}</td>
      <td>$${coin.current_price.toLocaleString()}</td>
      <td style="color: ${coin.price_change_percentage_24h >= 0 ? 'lightgreen' : 'red'}">
        ${coin.price_change_percentage_24h.toFixed(2)}%
      </td>
    `;
    tbody.appendChild(row);
  });
}

fetchCryptoData();
setInterval(fetchCryptoData, 60000);