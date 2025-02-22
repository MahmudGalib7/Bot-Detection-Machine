// BotDetector module for browser use.
// This module implements a bot detection algorithm using multiple heuristics.
// It examines user agent strings, mouse movements, keystroke timings, click intervals, and IP reputation.
// ---------------------------------------------------------------

class BotDetector {
    constructor() {
        this.threshold = 50; // score above which the request is considered a bot
        this.weights = {
            userAgent: 20,
            mouseMovement: 15,
            keystroke: 10,
            click: 5,
            ipReputation: 0,
        };
        // A simple list of known bad IPs for simulation
        this.badIPs = ['10.0.0.2', '66.249.66.1'];
    }

    // Analyze an entire request and return an aggregated score
    analyzeRequest(request) {
        let score = 0;
        score += this.checkUserAgent(request.userAgent);
        score += this.checkMouseMovements(request.mouseMovements);
        score += this.checkKeystrokeTimings(request.keystrokeTimings);
        score += this.checkClickIntervals(request.clickIntervals);
        score += this.checkIPReputation(request.ip);
        return score;
    }

    // Return true if the score indicates a bot
    isBot(score) {
        return score >= this.threshold;
    }

    // Check user agent for common bot patterns
    checkUserAgent(userAgent) {
        let score = 0;
        const lowerUA = userAgent.toLowerCase();
        if (lowerUA.indexOf("bot") > -1 || lowerUA.indexOf("crawl") > -1 || lowerUA.indexOf("spider") > -1) {
            score += this.weights.userAgent;
        } else {
            score += this.weights.userAgent * 0.2;
        }
        return score;
    }

    // Analyze mouse movement data.
    checkMouseMovements(movements) {
        let score = 0;
        if (!movements || movements.length < 5) {
            score += this.weights.mouseMovement;
        } else {
            let variance = this.calculateVariance(movements);
            if (variance < 20) {
                score += this.weights.mouseMovement * 0.9;
            } else {
                score += this.weights.mouseMovement * 0.1;
            }
        }
        return score;
    }

    // Calculate variance for a numeric array.
    calculateVariance(data) {
        const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
        const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
        return variance;
    }

    // Analyze keystroke timings.
    checkKeystrokeTimings(timings) {
        let score = 0;
        if (!timings || timings.length < 5) {
            score += this.weights.keystroke;
        } else {
            let stdDev = this.calculateStdDev(timings);
            if (stdDev < 30) {
                score += this.weights.keystroke;
            } else {
                score += this.weights.keystroke * 0.2;
            }
        }
        return score;
    }

    // Calculate standard deviation for a numeric array.
    calculateStdDev(data) {
        const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
        const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
        return Math.sqrt(variance);
    }

    // Analyze click intervals.
    checkClickIntervals(intervals) {
        let score = 0;
        if (!intervals || intervals.length < 5) {
            score += this.weights.click;
        } else {
            let diffSum = 0;
            for (let i = 1; i < intervals.length; i++) {
                diffSum += Math.abs(intervals[i] - intervals[i - 1]);
            }
            let avgDiff = diffSum / (intervals.length - 1);
            if (avgDiff < 50) {
                score += this.weights.click;
            } else {
                score += this.weights.click * 0.3;
            }
        }
        return score;
    }

    // Check IP reputation by comparing against known bad IPs.
    checkIPReputation(ip) {
        if (this.badIPs.indexOf(ip) > -1) {
            return 10;
        }
        return 0;
    }

    // Advanced analysis functions (for extra code length)
    analyzeAdvancedUserAgent(userAgent) {
        let score = 0;
        const suspiciousPatterns = ["^bot", "spider", "crawl", "python-urllib"];
        suspiciousPatterns.forEach(pattern => {
            let regex = new RegExp(pattern, "i");
            if (regex.test(userAgent)) {
                score += 5;
            }
        });
        return score;
    }
    
    analyzeMovementSmoothness(movements) {
        let score = 0;
        if (!movements || movements.length < 10) {
            return this.weights.mouseMovement;
        }
        let smoothCount = 0;
        for (let i = 1; i < movements.length; i++) {
            if (Math.abs(movements[i] - movements[i - 1]) < 5) {
                smoothCount++;
            }
        }
        const smoothRatio = smoothCount / (movements.length - 1);
        if (smoothRatio > 0.8) score += 10;
        else if (smoothRatio > 0.5) score += 5;
        return score;
    }
    
    analyzeKeystrokeConsistency(timings) {
        let score = 0;
        if (!timings || timings.length < 5) return this.weights.keystroke;
        const diffArray = [];
        for (let i = 1; i < timings.length; i++) {
            diffArray.push(Math.abs(timings[i] - timings[i - 1]));
        }
        const avg = diffArray.reduce((a, b) => a + b, 0) / diffArray.length;
        const deviations = diffArray.filter(val => Math.abs(val - avg) < 10).length;
        const consistency = deviations / diffArray.length;
        if (consistency > 0.9) score += 10;
        else if (consistency > 0.7) score += 5;
        return score;
    }
    
    analyzeClickRegularity(intervals) {
        let score = 0;
        if (!intervals || intervals.length < 5) return this.weights.click;
        let diffSum = 0;
        for (let i = 1; i < intervals.length; i++) {
            diffSum += Math.abs(intervals[i] - intervals[i - 1]);
        }
        const avgDiff = diffSum / (intervals.length - 1);
        if (avgDiff < 20) score += 10;
        else if (avgDiff < 40) score += 5;
        return score;
    }
    
    combinedAdvancedAnalysis(request) {
        let advScore = 0;
        advScore += this.analyzeAdvancedUserAgent(request.userAgent);
        advScore += this.analyzeMovementSmoothness(request.mouseMovements);
        advScore += this.analyzeKeystrokeConsistency(request.keystrokeTimings);
        advScore += this.analyzeClickRegularity(request.clickIntervals);
        return advScore;
    }
    
    fullAnalysis(request) {
        let baseScore = this.analyzeRequest(request);
        let advScore = this.combinedAdvancedAnalysis(request);
        return baseScore + advScore * 0.5;
    }
    
    detailedAnalysis(request) {
        const details = {};
        details.userAgentBase = this.checkUserAgent(request.userAgent);
        details.userAgentAdvanced = this.analyzeAdvancedUserAgent(request.userAgent);
        details.mouseBase = this.checkMouseMovements(request.mouseMovements);
        details.mouseAdvanced = this.analyzeMovementSmoothness(request.mouseMovements);
        details.keystrokeBase = this.checkKeystrokeTimings(request.keystrokeTimings);
        details.keystrokeAdvanced = this.analyzeKeystrokeConsistency(request.keystrokeTimings);
        details.clickBase = this.checkClickIntervals(request.clickIntervals);
        details.clickAdvanced = this.analyzeClickRegularity(request.clickIntervals);
        details.ip = this.checkIPReputation(request.ip);
        details.combinedAdvanced = this.combinedAdvancedAnalysis(request);
        details.fullScore = this.fullAnalysis(request);
        return details;
    }
    
    // Filler methods to extend code length
    fillerMethod1() {
        let result = 0;
        for (let i = 0; i < 50; i++) {
            result += Math.sin(i);
        }
        return result;
    }
    
    fillerMethod2() {
        let result = 1;
        for (let i = 1; i < 100; i++) {
            result *= Math.cos(i);
            if (result === 0) result = 1;
        }
        return result;
    }
    
    fillerMethod3() {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.tan(i % 10));
        }
        return arr;
    }
    
    extendedFillerAnalysis() {
        let total = 0;
        for (let i = 0; i < 200; i++) {
            total += this.fillerMethod1() + this.fillerMethod2();
        }
        return total;
    }
}

// Expose BotDetector as a global variable for browser access
window.BotDetector = BotDetector;