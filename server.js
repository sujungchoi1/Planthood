const express = require("express");
const cors = require("cors");

const app = express();
const port = 8050;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

require('./server/config/mongoose.config');

require('./server/routes/routes')(app);

app.listen(port, () => console.log(`You are on port ${port}`));