const express = require("express");
const eventController = require("../controllers/eventController");

const router = express.Router();

router.route("/events").post(eventController.createEvent);
router.route("/event/:id").get(eventController.getEvent);

module.exports = router;
