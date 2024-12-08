const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
    address: {
      type: DataTypes.TEXT, // For longer address strings
      allowNull: true, // Optional field
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = User;
