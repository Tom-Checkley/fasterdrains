const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;

// const frontEndApp = 'http://localhost:4200';

// app.use(cors({
//   origin: frontEndApp
// }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
  console.log('App listening on port ' + port);
});