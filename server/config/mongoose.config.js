const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/planthood", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database planthood"))
    .catch(err => console.log("Something went wrong when connecting to the database planthood", err));
