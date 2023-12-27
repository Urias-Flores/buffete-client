import { createRequestHandler } from "@remix-run/express";
import fs from 'fs';
import https from 'https';
import express from "express";

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";

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