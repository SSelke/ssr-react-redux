import React from 'react';

const HTML = ({content, state, helmet}) => {
    return (
        <html>
            <head dangerouslySetInnerHTML={{
                __html: `${helmet.title.toString()}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossorigin="anonymous" >
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossorigin="anonymous" >
                <link rel="stylesheet" href="./build/public/assets/css/styles.min.css" >
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" >
                <meta name="theme-color" content="#000000" >
            `}}></head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{__html: content}}></div>
                <script dangerouslySetInnerHTML={{
                    __html: `window.__INITIAL_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}`
                }}></script>
                <script src="client_bundle.js"></script>
            </body>
        </html>
    );
}

export default HTML;