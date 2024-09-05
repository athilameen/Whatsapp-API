const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/whatsapp", apiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(PORT + " port is running");
})
