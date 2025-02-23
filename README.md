# 🛡️✨ **Bot Detection Machine** 🚀🕵️‍♀️

A browser-based bot detection simulation that analyzes user behavior to determine whether a request comes from a bot or a human. This project simulates various behavioral signals and combines them using advanced heuristics for accurate bot detection.

## 🚀 Features

- 🕵️ **User Agent Analysis:** Detects bot-related identifiers in the user agent string.
- 🖱️ **Mouse Movement Analysis:** Evaluates variability and natural randomness in mouse movements.
- ⌨️ **Keystroke Timing Analysis:** Detects suspiciously consistent typing patterns.
- 🕒 **Click Interval Analysis:** Reviews click timings to catch robotic precision.
- 📊 **Advanced Heuristics:** Combines multiple analyses for a more accurate detection score.
- 🔴 **Live Simulation Mode:** Simulate a continuous stream of requests in real time.

## 📂 Project Structure

```
├── 📄 index.html             # Main HTML file
├── 📂 src/
│   ├── ⚡ utils.js          # Utility functions for simulating behavior
│   ├── 🧠 detector.js       # BotDetector class with detection logic
│   └── 📘 app.js            # Main script handling simulation and display
```

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### 1. 🛜 Clone the Repository:

```bash
git clone https://github.com/MahmudGalib7/Bot-Detection-Machine.git
cd Bot-Detection-Machine
```

### 2. 🌐 Launch the Project:

- 🟩 **Option 1:** Open `index.html` directly in your browser.
- 🟨 **Option 2:** Use Visual Studio Code with the **Live Server** extension for an enhanced development experience.

### 3. 🎯 Simulate Requests:

The page loads with sample requests and displays detection results. To enable live request simulation, **uncomment** the following line in `app.js`:

```javascript
simulateLiveRequests(10);
```

Adjust the number of requests as needed!

## 📘 File Overview

- 🏗️ **`index.html`:** Main HTML structure, linking all scripts.
- 🛠️ **`src/utils.js`:** Functions to generate simulated behavior (mouse movements, keystrokes, clicks, IP addresses).
- 🔍 **`src/detector.js`:** `BotDetector` class implementing various detection methods.
- 🧩 **`src/app.js`:** Manages request creation, detection, and result display.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or spot bugs, feel free to open an issue or submit a pull request.

## 📝 License

This project is provided as-is for educational purposes. Feel free to modify and build upon it.

---

If you’d like me to add installation requirements, usage examples, or more detailed explanations of the detection algorithms, just let me know! 🚀✨

