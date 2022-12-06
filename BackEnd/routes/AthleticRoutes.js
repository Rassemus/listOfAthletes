const express = require("express");

const AthleticControllers = require("../controllers/AthleticControllers");

const router = express.Router();

router
  .route("/")
  .get(AthleticControllers.getAll)
  .post(AthleticControllers.createNew);

router.route("/:id").get(AthleticControllers.getById);

router.route("/:id").put(AthleticControllers.update);

router.route("/delete/:id").delete(AthleticControllers.delete);

module.exports = router;
