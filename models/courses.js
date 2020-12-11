var mongoose = require("mongoose");
var coursesSchema = mongoose.Schema({
  courseName: String,
  courseID: String,
  courseDuration: String,
  courseFee: String,
});
const newCourses = mongoose.model("newCourses", coursesSchema);
module.exports = newCourses;
