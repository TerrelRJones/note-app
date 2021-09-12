"use strict";
const { sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
        as: "user",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined };
    }
  }
  Notes.init(
    {
      note_uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "notes",
      modelName: "Notes",
    }
  );
  return Notes;
};
