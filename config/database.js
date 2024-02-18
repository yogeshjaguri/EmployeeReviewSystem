const mongoose = require("mongoose");
require("dotenv").config();

// Retrieve MongoDB connection string from environment variable
const URI = process.env.MONGO_URL;

// Check if URI is defined
if (!URI) {
  console.error(
    "MongoDB connection URI is not defined. Check your environment variables."
  );
  process.exit(1); // Exit the process with a non-zero status code
}

// Connect to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.error("MongoDB connection error:", error));

const db = mongoose.connection; // Store the connection

// Check the connection status
db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => console.log("DATABASE connection is Established"));

// Export the connection
module.exports = db;
