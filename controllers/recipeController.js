const Recipe = require('../models/Recipe')
exports.removeRecipe=async(reqj,res)=>{};
exports.updateRecipe=async(reqj,res)=>{};

exports.getAllRecpies = async (req, res) => {
  try {
    const recips = await Recipe.find();
    res.json(recips);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
};
exports.addRecipe = async(req,res)=>{
  const recipe = await Recipe.create(req.body);
  res.json(recipe)
};
