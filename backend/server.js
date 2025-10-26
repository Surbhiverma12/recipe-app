const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes placeholder

app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Recipe API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
