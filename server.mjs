import express from 'express';
import { loadConfiguration, startServer } from 'snowpack';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

const app = express();
app.set('view engine', 'ejs');

async function main() {
    const config = await loadConfiguration({}, 'snowpack.config.mjs');
    const devServer = await startServer({ config: config });
    const runtime = devServer.getServerRuntime();
    
    app.get('/new.html', async (req, res) => {
        const importedComponent = await runtime.importModule('/dist/NewBug.js');
        const reactComponent = importedComponent.exports.NewBug;

        const element = React.createElement(reactComponent, null);
        const markup = ReactDOMServer.renderToString(element);

        const config = {
            navigateToBug: req.query.ntb || true
        };

        res.render('new', { req, markup, config });
    });
    
    app.listen(8081);
}

main();