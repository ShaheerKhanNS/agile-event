const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Event = sequelize.define("events", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tagline: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schedule: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  moderator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subcategory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rigorrank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  attendees: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue("attendees").split(";");
    },
    set(val) {
      this.setDataValue("attendees", val.join(";"));
    },
  },
});

module.exports = Event;
