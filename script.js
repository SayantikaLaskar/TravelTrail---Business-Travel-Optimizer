document.getElementById('travel-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const fromCity = document.getElementById('from').value.trim();
  const toCity = document.getElementById('to').value.trim();

  const flights = await fetch('sample_flights.json').then(res => res.json());
  const hotels = await fetch('sample_hotels.json').then(res => res.json());

  const matches = flights
    .filter(f => f.from_city.toLowerCase() === fromCity.toLowerCase() && f.to_city.toLowerCase() === toCity.toLowerCase())
    .flatMap(flight => {
      return hotels.map(hotel => {
        const score = (
          0.4 * flight.price +
          0.3 * flight.duration -
          0.3 * flight.loyalty * 10 +
          0.2 * hotel.price
        );
        return {
          flight,
          hotel,
          score: Math.round(score * 100) / 100
        };
      });
    });

  const topResults = matches.sort((a, b) => a.score - b.score).slice(0, 5);
  displayResults(topResults);
});

function displayResults(data) {
  const resultsDiv = document.getElementById('results');

  if (data.length === 0) {
    resultsDiv.innerHTML = '<p>No matching results found.</p>';
    return;
  }

  let html = '<table><tr><th>Flight No</th><th>From</th><th>To</th><th>Duration (min)</th><th>Loyalty</th><th>Flight Price</th><th>Hotel</th><th>Hotel Price</th><th>City</th><th>Stars</th><th>Score</th></tr>';
  data.forEach(item => {
    html += `<tr>
      <td>${item.flight.flight_no}</td>
      <td>${item.flight.from_city}</td>
      <td>${item.flight.to_city}</td>
      <td>${item.flight.duration}</td>
      <td>${item.flight.loyalty}</td>
      <td>$${item.flight.price}</td>
      <td>${item.hotel.name}</td>
      <td>$${item.hotel.price}</td>
      <td>${item.hotel.city}</td>
      <td>${item.hotel.stars}</td>
      <td>${item.score}</td>
    </tr>`;
  });
  html += '</table>';
  resultsDiv.innerHTML = html;
}
