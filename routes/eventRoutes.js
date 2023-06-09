const express = require("express");
const eventController = require("../controllers/eventController");

const router = express.Router();

router
  .route("/events")
  .post(eventController.createEvent)
  .get(eventController.getEvents);
router
  .route("/event/:id")
  .get(eventController.getEvent)
  .delete(eventController.deleteEvent)
  .patch(eventController.updateEvent);

module.exports = router;
