var express = require("express");
var router = express.Router();
var courses = require("../models/courses");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await courses.find();

  res.render("products/list", {
    title: "EDUREKAS COURSE LIST",
    products: products,
  });
});
router.get("/add", async function (req, res, next) {
  res.render("products/add");
});
router.post("/add", async function (req, res, next) {
  let newcourse = new courses(req.body);
  await newcourse.save();
  res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
  let course = await courses.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

router.get("/delete/:id", async function (req, res, next) {
  let course = await courses.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/edit/:id", async function (req, res, next) {
  let course = await courses.findById(req.params.id);
  res.render("products/edit", { course });
});
router.post("/edit/:id", async function (req, res, next) {
  let course = await courses.findById(req.params.id);
  course.courseName = req.body.name;
  course.id = req.body.id;
  course.courseDuration = req.body.courseDuration;
  course.courseFee = req.body.courseFee;

  await course.save();
  res.redirect("/products");
});

module.exports = router;
