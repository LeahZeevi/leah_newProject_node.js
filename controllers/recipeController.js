const Recipe = require('../models/Recipe')
exports.updateRecipe=async(req,res)=>{
  const { name } = req.params;
  const {  category } = req.body;

  try {
    const updateRecipe= await User.findOneAndUpdate(
      { name: name }, // עדכון לפי שדה userId
      { category:category},
      
    );

    if (!updateRecipe) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updateRecipe);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

exports.removeRecipe=async(req,res)=>{
  const  RecipeId  = req.params.name;
  console.log(RecipeId);
    try {
      const deleteRecipe = await Recipe.findOneAndDelete({ name: RecipeId});
      if (!deleteRecipe) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
};


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



