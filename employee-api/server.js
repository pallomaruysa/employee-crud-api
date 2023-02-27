/**
 * file: server.js
 * description: file responsible for all configuration and execution of the Back-End ('Employee')
 * date: 02/25/2023
 * author: Palloma Ruysa
 */

const app = require ('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta ...: ', port);
});