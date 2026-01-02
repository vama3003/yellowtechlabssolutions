
const https = require('https');

const data = JSON.stringify({
    name: "Test Script",
    email: "test@example.com",
    message: "This is a test from Node.js"
});

const options = {
    hostname: 'formsubmit.co',
    path: '/ajax/vama.m2003@gmail.com',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': data.length,
        'Origin': 'http://localhost:8080',
        'Referer': 'http://localhost:8080/contact.html'
    }
};

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
