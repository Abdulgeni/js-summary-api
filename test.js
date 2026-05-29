// Test the API
const http = require('http');

const testData = JSON.stringify({
    text: "JavaScript is a versatile programming language. It runs in browsers and on servers. Node.js makes backend development easy. Express is a popular framework. APIs connect applications together.",
    maxLength: 3
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/summarize',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log('Response:', JSON.parse(data));
    });
});

req.write(testData);
req.end();