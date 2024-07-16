const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send("ova ruta radi");
});

module.exports = router;