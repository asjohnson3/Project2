module.exports = function(sequelize, DataTypes) {

  var Example = sequelize.define("Example", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    score: DataTypes.INTEGER
  });
  // console.log(Example);
  return Example;
};
