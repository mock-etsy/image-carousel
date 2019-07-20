const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("../database/index");
const port = process.env.PORT || 3003;
const compression = require('compression');

app.use(compression());

// function ignoreFavicon(req, res, next) {
//   if (req.originalUrl === '/favicon.ico') {
//     res.status(204).json({nope: true});
//   } else {
//     next();
//   }
// }

// app.use(ignoreFavicon);
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get('/images/:listingId', (req, res) => {
  db.getListingImages(req.params.id, response => {
    // console.log(response[0].data);
    res.send(response);
  })
})

app.listen(port, () => {
  console.log(`The reviews have started on aisle ${port}`);
});