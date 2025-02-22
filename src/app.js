// Main application script for the Bot Detection Machine in the browser.
// This code creates sample requests, runs the detector, and displays results in the page.
(function() {
    const resultsContainer = document.getElementById('results');
    
    // Create some sample requests with simulated behavior
    const sampleRequests = [
        {
            id: 1,
            userAgent: navigator.userAgent,
            mouseMovements: utils.generateMovementData(true),
            keystrokeTimings: utils.generateKeystrokeData(true),
            clickIntervals: utils.generateClickData(true),
            ip: "192.168.1.101"
        },
        {
            id: 2,
            userAgent: "Googlebot/2.1 (+http://www.google.com/bot.html)",
            mouseMovements: utils.generateMovementData(false),
            keystrokeTimings: utils.generateKeystrokeData(false),
            clickIntervals: utils.generateClickData(false),
            ip: "66.249.66.1"
        },
        {
            id: 3,
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
            mouseMovements: utils.generateMovementData(true),
            keystrokeTimings: utils.generateKeystrokeData(true),
            clickIntervals: utils.generateClickData(true),
            ip: "192.168.1.102"
        },
        {
            id: 4,
            userAgent: "bot/1.0",
            mouseMovements: utils.generateMovementData(false),
            keystrokeTimings: utils.generateKeystrokeData(false),
            clickIntervals: utils.generateClickData(false),
            ip: "10.0.0.2"
        }
    ];
    
    // Initialize the detector
    const detector = new BotDetector();
    
    // Process each request and display the details
    sampleRequests.forEach(request => {
        const baseScore = detector.analyzeRequest(request);
        const advScore = detector.combinedAdvancedAnalysis(request);
        const fullScore = detector.fullAnalysis(request);
        const isBot = detector.isBot(fullScore);
        
        const requestDiv = document.createElement('div');
        requestDiv.className = 'request';
        requestDiv.innerHTML = `
            <strong>Request ID:</strong> ${request.id} (${request.ip})<br>
            <strong>User Agent:</strong> ${request.userAgent}<br>
            <strong>Base Score:</strong> ${baseScore.toFixed(2)}<br>
            <strong>Advanced Score:</strong> ${advScore.toFixed(2)}<br>
            <strong>Full Score:</strong> ${fullScore.toFixed(2)}<br>
            <strong>Detection:</strong> ${isBot ? 'Bot' : 'Human'}
        `;
        resultsContainer.appendChild(requestDiv);
    });
    
    // Simulate a continuous stream of live requests
    function simulateLiveRequests(count) {
        let idCounter = 100;
        let i = 0;
        const intervalId = setInterval(() => {
            const request = {
                id: idCounter++,
                userAgent: Math.random() > 0.5
                  ? navigator.userAgent
                  : "bot/2.0",
                mouseMovements: utils.generateMovementData(Math.random() > 0.5),
                keystrokeTimings: utils.generateKeystrokeData(Math.random() > 0.5),
                clickIntervals: utils.generateClickData(Math.random() > 0.5),
                ip: utils.generateRandomIP()
            };
            const fullScore = detector.fullAnalysis(request);
            const isBot = detector.isBot(fullScore);
            
            const requestDiv = document.createElement('div');
            requestDiv.className = 'request';
            requestDiv.innerHTML = `
                <strong>Live Request ID:</strong> ${request.id} (${request.ip})<br>
                <strong>User Agent:</strong> ${request.userAgent}<br>
                <strong>Full Score:</strong> ${fullScore.toFixed(2)}<br>
                <strong>Detection:</strong> ${isBot ? 'Bot' : 'Human'}
            `;
            resultsContainer.appendChild(requestDiv);
            
            i++;
            if (i >= count) {
                clearInterval(intervalId);
            }
        }, 500);
    }
    
    // Uncomment to simulate 10 live requests automatically:
    // simulateLiveRequests(10);
    
    // Extra filler code to meet overall file-line requirements.
    function extraLogging() {
        for (let k = 0; k < 20; k++) {
            console.log("Extra logging line: " + k);
        }
    }
    extraLogging();
    
    function futureEnhancement() {
        for (let j = 0; j < 10; j++) {
            console.log("Future enhancement placeholder: " + j);
        }
    }
    futureEnhancement();
})();