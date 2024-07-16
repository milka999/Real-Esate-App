const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getListings);
router.get("/rent", controller.getRentListings);
router.get("/sale", controller.getSaleListings);
// moradoh ovako, inače će express sve da proba da parsira kao broj
router.get("/single/:id", controller.getSingleListing);
router.delete("/single/:id", controller.deleteListing);
router.put("/single/:id", controller.editListing);
router.post("/", controller.addListing);

module.exports = router;
