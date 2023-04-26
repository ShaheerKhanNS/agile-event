const Event = require("../model/event");

exports.createEvent = async (req, res) => {
  try {
    const {
      name,
      tagline,
      schedule,
      description,
      imageUrl,
      moderator,
      category,
      subcategory,
      rigorrank,
      attendees,
    } = req.body;

    await Event.create({
      name,
      tagline,
      schedule,
      description,
      imageUrl,
      moderator,
      category,
      subcategory,
      rigorrank,
      attendees,
    });

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);

    res.status(200).json({
      status: "success",
      event,
    });
  } catch (err) {
    console.log(err);
  }
};
