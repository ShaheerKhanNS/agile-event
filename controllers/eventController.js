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

    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEvents = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const itemsPerPage = +req.query.size || 2;

    const events = await Event.findAll({
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
    });

    res.status(200).json({
      status: "success",
      events,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findByPk(id);

    res.status(201).json({
      status: "success",
      event,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;

    await Event.destroy({
      where: { id },
    });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = req.body;
    // console.log(Object.entries(updated));
    const event = await Event.findByPk(id);
    for (const [key, value] of Object.entries(updated)) {
      event[key] = value;
    }
    await event.save();

    res.status(200).json({
      status: "success",
      message: "updated",
    });
  } catch (err) {
    console.log(err);
  }
};
