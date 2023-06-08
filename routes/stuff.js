const express = require("express");
const auth = require("../middleware/auth.js");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");

console.log(stuffCtrl.createThing);
router.post('/', auth, stuffCtrl.createThing);
// router.put('/:id', auth, stuffCtrl.modifyThing);
// router.delete('/:id', auth, stuffCtrl.deleteThing);
// router.get('/:id', auth, stuffCtrl.getOneThing);
// router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;