const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/cities", controller.getCities);
router.get("/city/:id/location", controller.getLocations);
router.get("/types", controller.getTypes);
router.get("/structures", controller.getStructures);
router.post("/image", controller.uploadImage);

module.exports = router;
