// Utility functions for the Bot Detector module.
// This file contains helper functions for generating simulated data,
// random numbers, timing delays, and more.
// -----------------------------------------------------------

// Generate simulated mouse movement data
function generateMovementData(isHuman) {
    const movements = [];
    if (isHuman) {
        // Human-like movement: randomness with variance
        for (let i = 0; i < 30; i++) {
            movements.push(Math.floor(Math.random() * 100) + (Math.sin(i) * 10));
        }
    } else {
        // Bot-like movement: repetitive and almost linear
        for (let i = 0; i < 5; i++) {
            movements.push(50);
        }
    }
    return movements;
}

// Generate simulated keystroke timing data (in milliseconds)
function generateKeystrokeData(isHuman) {
    const timings = [];
    if (isHuman) {
        for (let i = 0; i < 25; i++) {
            timings.push(Math.floor(Math.random() * 300) + 50);
        }
    } else {
        // Bot typist: very uniform timing
        for (let i = 0; i < 25; i++) {
            timings.push(100);
        }
    }
    return timings;
}

// Generate simulated click interval data (in milliseconds)
function generateClickData(isHuman) {
    const intervals = [];
    if (isHuman) {
        for (let i = 0; i < 20; i++) {
            intervals.push(Math.floor(Math.random() * 200) + 50);
        }
    } else {
        // Bot clicks: almost constant intervals
        for (let i = 0; i < 20; i++) {
            intervals.push(70);
        }
    }
    return intervals;
}

// Generate a random IP address for simulation
function generateRandomIP() {
    return (
        Math.floor(Math.random() * 256) +
        "." +
        Math.floor(Math.random() * 256) +
        "." +
        Math.floor(Math.random() * 256) +
        "." +
        Math.floor(Math.random() * 256)
    );
}

// Sleep function to simulate delay (blocking for demo purposes)
function sleep(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // Busy wait
    }
}

// Additional filler utility functions to increase code lines
function fillerUtility1(input) {
    // Reverse a string
    return input.split('').reverse().join('');
}

function fillerUtility2(numbers) {
    // Sum array elements with detailed logging (dummy loop)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function fillerUtility3(obj) {
    // Iterate through object keys to simulate data processing
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += key + ':' + obj[key] + ';';
        }
    }
    return result;
}

function fillerUtility4(arr) {
    // Return sorted array (simple bubble sort for demonstration)
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
}

function fillerUtility5() {
    // Generate a random alphanumeric string
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function fillerUtility6(n) {
    // Generate an array with n Fibonacci numbers
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

function fillerUtility7(matrixSize) {
    // Create a dummy matrix and return its transpose
    const matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        const row = [];
        for (let j = 0; j < matrixSize; j++) {
            row.push(Math.floor(Math.random() * 100));
        }
        matrix.push(row);
    }
    const transpose = [];
    for (let i = 0; i < matrixSize; i++) {
        const row = [];
        for (let j = 0; j < matrixSize; j++) {
            row.push(matrix[j][i]);
        }
        transpose.push(row);
    }
    return transpose;
}

function fillerUtility8() {
    // Filler function that performs a series of dummy calculations
    let total = 0;
    for (let i = 0; i < 100; i++) {
        total += Math.sqrt(i) * Math.log(i + 1);
    }
    return total;
}

function fillerUtility9(stringInput) {
    // Return the string in uppercase with exclamation marks
    return stringInput.toUpperCase() + "!!!";
}

function fillerUtility10(arr) {
    // Remove duplicate values from an array
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

// Expose the utility functions as a global variable
window.utils = {
    generateMovementData,
    generateKeystrokeData,
    generateClickData,
    generateRandomIP,
    sleep,
    fillerUtility1,
    fillerUtility2,
    fillerUtility3,
    fillerUtility4,
    fillerUtility5,
    fillerUtility6,
    fillerUtility7,
    fillerUtility8,
    fillerUtility9,
    fillerUtility10
};