const express = require('express');
const router=express.Router();
const{addRecipe,removeRecipe,updateRecipe}=require("../controllers/recipeController");
router.put('/updateRecipe',updateRecipe);
router.delete('/removeRecipe',removeRecipe);
router.post('/addRecipe',addRecipe);

module.exports=router;