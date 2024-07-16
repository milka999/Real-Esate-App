const express = require('express');
const listingRoutes = require('./listings/routes');

const app= express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use('/api/v1/listings', listingRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));