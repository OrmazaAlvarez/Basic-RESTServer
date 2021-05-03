const {Router} = require('express');
const {userGet, userPost, userPut, userPatch, userDelete} = require('../controllers/user.controller');
const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.patch('/', userPatch);
router.delete('/:id', userDelete);

module.exports = router;
