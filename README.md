# TravelTrail - Business Travel Optimizer

**TravelTrail** is a lightweight, frontend-only travel recommendation tool that ranks travel combinations (flight + hotel) based on cost, duration, and loyalty. Users can search by city and instantly see the top 5 ranked travel options.

## ✈️ Features
- Uses static `sample_flights.json` and `sample_hotels.json` files.
- Matches results by `from` and `to` city.
- Ranks using a weighted formula considering:
  - Flight price
  - Duration (in minutes)
  - Loyalty score (mocked)
  - Hotel price
- Clean, responsive web UI using HTML, CSS, and JavaScript.

## 🧠 Ranking Formula
```
Score = (0.4 × Flight Price)
      + (0.3 × Duration in minutes)
      - (0.3 × Loyalty × 10)
      + (0.2 × Hotel Price)
```
Lower score = better option.

---

## 📁 File Structure
```
TravelTrail/
├── index.html
├── style.css
├── script.js
├── sample_flights.json
├── sample_hotels.json
└── README.md
```

---

## 🚀 How to Run
1. Clone or download this repo.
2. Open `index.html` directly in your browser.
3. Enter "From City" and "To City" as per data in the JSON files.
4. View the top 5 optimized travel combos in a ranked table.

> 📝 Make sure your browser allows local file loading for JSON if running directly.

---

## 🧪 Sample Data
- All flight and hotel data is mocked using [Mockaroo](https://mockaroo.com).
- You can regenerate more realistic data using the following field structures:

### Flights (`sample_flights.json`):
| Field       | Type                 |
|-------------|----------------------|
| flight_no   | Airline Flight Number|
| price       | Number (80–200)      |
| duration    | Number (minutes)     |
| loyalty     | Number (1–10)        |
| from_city   | City                 |
| to_city     | City                 |

### Hotels (`sample_hotels.json`):
| Field       | Type               |
|-------------|--------------------|
| name        | Company Name       |
| price       | Number (40–150)    |
| city        | City               |
| stars       | Number (1–5+)      |
| amenities   | Paragraph/Words    |

---

## 📦 Future Improvements
- Integrate real flight/hotel APIs (e.g., Amadeus Sandbox, Skyscanner).
- Add filters: max price, hotel rating, amenities.
- Add maps and visualizations.
- Deploy as a static site via GitHub Pages or Netlify.

---

## 👩‍💻 Built With
- HTML5
- CSS3
- JavaScript (Vanilla)
- Mockaroo for dummy data

---

## 📄 License
This project is for internship demo purposes only and uses free, sandboxed or mocked data.
