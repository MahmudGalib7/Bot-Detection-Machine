# 🛡️ Bot Detection Machine

A simple, browser-based bot detection simulation that analyzes various aspects of user behavior to determine whether a request comes from a bot or a human. 

This project simulates different behavioral signals and combines them using heuristics for robust bot detection.

## 🚀 Features

- **User Agent Analysis:** Detects bot-related identifiers in the user agent string.
- **Mouse Movement Analysis:** Evaluates variability and natural randomness in mouse movements.
- **Keystroke Timing Analysis:** Looks for suspiciously consistent typing patterns.
- **Click Interval Analysis:** Reviews click timings to catch robotic precision.
- **Advanced Heuristics:** Combines multiple analyses for a more accurate detection score.
- **Live Simulation:** Optional mode to simulate a continuous stream of requests.

## 📂 Project Structure

```
├── index.html             # Main HTML file
├── src/
│   ├── utils.js          # Utility functions for simulating behavior
│   ├── detector.js       # BotDetector class with detection logic
│   └── app.js            # Main script handling simulation and display
```

## 🛠️ How to Run

1. **Clone the Repository:**

```bash
git clone https://github.com/MahmudGalib7/Bot-Detection-Machine.git
cd Bot-Detection-Machine
```

2. **Open the Project:**

- Simply open `index.html` in your browser.
- Alternatively, use Visual Studio Code with the **Live Server** extension for an enhanced development experience.

3. **Using the Simulation:**

- The page loads with sample requests and displays detection results.
- To simulate live requests, **uncomment** the line in `app.js` that calls:

```javascript
simulateLiveRequests(10);
```

## 📘 Files Overview

- **`index.html`:** Provides the main structure and loads scripts in the correct order.
- **`src/utils.js`:** Functions for generating simulated behavior (mouse movements, keystrokes, clicks, IP addresses).
- **`src/detector.js`:** Implements the `BotDetector` class with various analysis methods.
- **`src/app.js`:** Manages request creation, detection, and result display.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

## 📝 License

This project is provided as-is for educational purposes.

---

Copy and paste this directly into your README file! Let me know if you want me to tweak anything. 🚀

