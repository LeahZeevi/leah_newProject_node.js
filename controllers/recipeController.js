const Recipe = require('../models/Recipe')
exports.removeRecipe=async(reqj,res)=>{
  const  RecipeId  = req.params._id;
  console.log(RecipeId);
    try {
      const deleteRecipe = await Recipe.findOneAndDelete({ id: _id });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
};
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

exports.deleteRecipe= async (req, res) => {

};

