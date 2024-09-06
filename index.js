import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://catfact.ninja/fact");
        res.render("index.ejs", {
            data: result.data,
        });
    } catch (error) {
        console.error('Request failed:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
});
app.post("/",async (req,res)=>{
    try {
        const result = await axios.get("https://catfact.ninja/fact");
        res.render("index.ejs", {
            data: result.data,
        });
    } catch (error) {
        console.error('Request failed:', error.response ? error.response.data : error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});