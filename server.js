import express from 'express';
import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import App from './src/app';
import { Helmet } from 'react-helmet';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {

    const context = {};

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    const html = `
        <html>
            <head>
                <title>${helmet.title.toString()}</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="client_bundle.js"></script>
            </body>
        </html>
    `;
    
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}`);
});