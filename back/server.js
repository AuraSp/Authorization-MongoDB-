const mongoose = require("mongoose");
const app = require("./app");


const DB =
 'mongodb+srv://Aura:Authorization@cluster0.tmxfb.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  });

const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});