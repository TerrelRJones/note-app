"use strict";
const { sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Notes }) {
      // define association here
      this.hasMany(Notes, {
        onDelete: "CASCADE",
        foreignKey: "userId",
        as: "notes",
      });
    }
    // NEGATE ID
    // toJSON() {
    //   return { ...this.get(), id: undefined };
    // }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      // setting id to be accessed on dashboard object
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "User must have a username" },
          notEmpty: { msg: "username must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "User must enter a valid email" },
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "email must not be empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must enter a password" },
          notEmpty: { msg: "password must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "user",
      modelName: "User",
    }
  );
  return User;
};
