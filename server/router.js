const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server is and up and running in browser");
});

module.exports = router;
