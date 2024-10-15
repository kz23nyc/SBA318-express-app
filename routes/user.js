import express from "express";

const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("User Home");
});

router.get("/:userId/profile/:profileId", (req, res) => {
  res.send(req.params);
});

export default router;
