import { createRequestHandler } from "@remix-run/express";
import fs from 'fs';
import https from 'https';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// notice that the result of `remix build` is "just a module"
import * as build from './build/index.js';

const app = express();
app.use(express.static("public"));

//Loading certificate
const privateKey = fs.readFileSync('/private.key');
const certificate = fs.readFileSync('/certificate.crt');
const ca = fs.readFileSync('/ca_bundle.crt');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000, () => {
    console.log('Inited server');
    console.log('port: 3000');
});