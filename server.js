import express from 'express';
import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers';
import bodyParser from 'body-parser';
import App from './src/app';
import { Helmet } from 'react-helmet';
import HTML from './src/configs/htmlComponent';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

function handleRender( req, res ) {

}

app.get(['*/:param', '*'], (req, res) => {

    //create a new redux store instance
    const store = createStore(reducers);

    const context = {};

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const preloadedState = store.getState();

    const helmet = Helmet.renderStatic();

    const html = <HTML content={content} state={preloadedState} helmet={helmet} />;
    
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
});

app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}`);
});