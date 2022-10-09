const { Router } = require("express");
const router = Router();
//RUTAS (API)

router.get('/test', (req, res) => {
    const data = {
        "name" : "Cesar",
        "website" : "Cesar.com"
    };
    res.json(data);
});

module.exports = router;