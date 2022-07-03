import express from 'express';
import morgan from 'morgan';
import hbs from 'express-handlebars';

import { routerMain } from './routes/main.routes.js';
import { nodenv, host, port } from './config/env.config.js';

// Create app
const app = express();

// Log status in dev
if (nodenv === 'development') { app.use(morgan('dev')); }

// Set template engine
app.engine('.hbs', hbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/views'); // use full path to views in production

// Add static files
app.use(express.static('src/public')); // use full path to public in production

// Add routes
app.use('/', routerMain);

// Serve app
app.listen(port || 8080, () => {
  console.log(`Server running in ${nodenv} at http://${host}:${port}`);
});