// Step 1: Import express and initialize the app
import express from "express";
import userRouter from "./routes/user.js";  // Import user routes

// Step 2: Initialize express app
const app = express();
const PORT = 4000; // Define port

// Step 3: Set the view engine and views folder
app.set("view engine", "pug");
app.set("views", "./views");

// Step 4: Middleware to serve static files from 'public' directory
app.use(express.static("public"));

// Step 5: Logger middleware
function logger(req, res, next) {
  console.log(`Received a request: ${req.method}, ${req.url}, ${req.hostname}`);
  next();
}
app.use(logger);

// Step 6: Define routes
app.get("/", (req, res) => {
  console.log("Root route accessed");
  res.render("index", { title: "Express Server", message: "Hello from Express Application!" });
});

// a user assesses the /express URL
app.get("/express", (req, res) => {
    res.send("<h1>Hello from Express</h1>");
  });  
  
// Step 7: Handle user routes
app.use("/user", userRouter);

// Step 8: Catch-all route for undefined paths
// app.use("*", (req, res) => {
//   throw new Error("Route not found");
// });

// Step 9: Error handling middleware
app.use((error, req, res, next) => {
  res.status(404).send(error.message);
  next();
});

// Step 10: Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
