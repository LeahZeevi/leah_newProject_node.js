const mongoose = require('mongoose');
const RecipeSchema=new mongoose.Schema({
    name:String,
    category:String,
    PreparationInstructions:Array,
}) 