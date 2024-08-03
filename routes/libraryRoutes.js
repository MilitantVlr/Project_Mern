const router = require('express').Router();
const libraryRoutes = require('../controllers/libraryController');

router.get("/getAllBooks", libraryRoutes.getAllBooks);
router.get("/getSpecificBook", libraryRoutes.getSpecificBook);
router.post("/createBooks", libraryRoutes.createBooks);
router.put("/updateBooks", libraryRoutes.updateBooks);
router.delete("/deleteBooks", libraryRoutes.deleteBooks);

module.exports = router;