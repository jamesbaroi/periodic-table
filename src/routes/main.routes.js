import express from 'express';
import { db } from '../config/db.config.js'

export const routerMain = express.Router();

// Route to landing / home page
routerMain.get('/', (req, res) => {
  db.query('SELECT * FROM chemical_elements;', (error, results) => {
    if (error) throw error;
    res.render('index', { results: results });
  });
});

// Route to element page
routerMain.get('/:element', (req, res) => {
  // Handle input
  const input = req.params.element.replaceAll(' ', '').toString().toLowerCase().trim();
  // Query database
  db.query('SELECT * FROM chemical_elements;', (error, results) => {
    if (error) throw error;
    // Check database against input
    if (!results.find(({ element }) => element == `${input}`)) {
      // Does not match / redirect to home
      res.redirect('/');
    }
    // Match found
    else {
      // Define matched data from database
      const data = results.find(({ element }) => element == `${input}`);
      // Render page with data
      res.render('element', { layout: 'element', data: data });
    }
  });
});

// Redirect
routerMain.all('*', (req, res) => { res.redirect('/'); });