const { createRequestHandler } = require("@remix-run/express");
const fs = require ('fs');
const https = require('https');
const express = require("express");

// notice that the result of `remix build` is "just a module"
const build =  require('./build/index.js');

const app = express();
app.use(express.static("public"));

//Loading certificate
const privateKey = fs.readFileSync('private.key');
const certificate = fs.readFileSync('certificate.crt');

const credentials = {
    key: privateKey,
    cert: certificate
};

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => {
    console.log('Inited server');
    console.log('port: 443');
});