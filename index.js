const express = require("express");
const schema = require("./schema");
const app = express();
app.use(express.json());


app.post ("/schema" , async (req, res) => {
    await schema.create(req.body);
    res.status(200).send("hello")
})

app.get("/", async (req, res) => {
    let data = await schema.find()
  res.send(data);
});

app.listen(8000, () => {
    console.log("listen in 8000");
  
  });