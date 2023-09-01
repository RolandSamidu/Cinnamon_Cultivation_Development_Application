const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const diseasesRouter = require('./routes/Diseases');
const stateOwnerRouter = require('./routes/StateOwner');
const feedback = require('./routes/feedback')

mongoose.set('strictQuery', false);


dotenv.config();

//middleware
app.use(cors());
app.use(express.json())
//route middleware for diseasesRouter
app.use('/api', diseasesRouter);
//route niddleware for stateOwner
app.use('/api',stateOwnerRouter);
//route niddleware for feedback
app.use('/api',feedback);


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running Application Successfully..!");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Successfully Connected"))
  .catch((error) => console.log(error));

app.use("/auth", require("./routes/UserLogin"));
app.use("/bank", require("./routes/Banks"));
app.use("/contact", require("./routes/Contacts"));
app.use("/LoanApply", require("./routes/LoanApplyForm"));
app.use("/VSO", require("./routes/VillageServiceOfficer"));
app.use("/api", require("./routes/Company_req"));

const port = process.env.PORT || 8100;

app.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});