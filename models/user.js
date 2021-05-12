const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let joinSchema = new Schema({
  id: String || Number,
  pw: String || Number,
  name: String,
});

// Create Model & Export
module.exports = mongoose.model("user", joinSchema);

// Define Schemes
// let userSchema = new Schema({
//   id: { type: String || Number, required: true, unique: true },
//   pw: { type: String || Number, required: true },
// });

// let joinSchema = new Schema({
//   id: { type: String || Number, required: true, unique: true },
//   pw: { type: String || Number, required: true },
//   name: { type: String, required: true },
// });
