const express = require('express');
const db = require('./config/connection');  //the exported mongoose connection

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {  // looking for the connection to be made using db-open
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log('succesful server connection using mongoose');
  });
});
