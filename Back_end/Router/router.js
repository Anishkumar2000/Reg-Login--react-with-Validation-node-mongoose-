const router = require("express").Router();
const {add,check,user} = require("../Controller/user");
router.get('/', (req,res)=>{
    res.send('Project running Successfully')
})
// router.use('/users', require("../Controller/user"));
router.get("/:id",user);
router.post("/add",add);
router.post("/check",check);

module.exports = router;
