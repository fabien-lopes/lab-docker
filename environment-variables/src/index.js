const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send(`Hello ${process.env.APP_NAME}`);
})

app.listen(port, () => {
    console.log("Express server listening on port", port);
})