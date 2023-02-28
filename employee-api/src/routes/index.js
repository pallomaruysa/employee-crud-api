/**
 * file: routes/index.js
 * description: file responsible for calling the API in the application on the Back-End side
 * date: 02/25/2023
 * author: Palloma Ruysa
 */

const express= require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  });
});

module.exports = router;
