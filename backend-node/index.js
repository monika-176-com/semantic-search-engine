const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/search", async (req, res) => {
    const { query } = req.body;

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/search",
            null,
            { params: { query } }
        );

        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error connecting to AI service");
    }
});

app.listen(5000, () => {
    console.log("Node server running on port 5000");
});

axios.post("http://127.0.0.1:8000/search", null, {
  params: { query }
});