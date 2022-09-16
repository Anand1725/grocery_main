const City = require("../models/cityname.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  City.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const cityname = req.body.cityname;

  const newCityname = new Cityname({ cityname });

  newCityname
    .save()
    .then(() => res.json("Cityname added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
