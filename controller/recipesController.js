const Recipe = require('../model/recipesModel')

// checks Recipe is already present,validates based on recipe schema and create dcoument in recipe collection
createRecipe = async (req,res)=>{
  try{
    let recipe = await Recipe.findOne({name:req.body.name})
    if(recipe){
      return res.status(400).send({message:"Recipe already exists"})
    }
    const newRecipe = new Recipe(req.body)
    await newRecipe.save()
    res.status(200).send(newRecipe)
  }catch(error){
    res.status(500).send({"message":error})
  }
}

// checks Recipe collection is available and retrives the documents in it
getAll = async (req,res)=>{
  try{
    const getAllRecipes = await Recipe.find({})
    if(!getAllRecipes || (Array.isArray(getAllRecipes) && getAllRecipes.length === 0)){
      return res.status(400).send({"message": "Recipes not available"})
    }
    res.status(200).send(getAllRecipes)
  }catch(error){
    res.status(500).send({"message":error})
  }
}

// finds the Recipe by id in collection and retrives it
getRecipeById = async (req,res)=>{
  try{
    const getRecipe = await Recipe.findById(req.params.id)
    if(!getRecipe){
      return res.status(400).send({"message":"Recipe not Found"})
    }
    res.status(200).send(getRecipe)
  }catch(error){
    res.status(500).send({"message":error})
  }
}

// finds and update the Recipe by id in collection with req.body fields
updateRecipe = async (req,res)=>{
  try{
    let alteredRecipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!alteredRecipe){
      return res.status(400).send({"message":"Recipe with this id not Found"})
    }
    res.status(200).send({
      "message": "Recipe upadated successfully",
      alteredRecipe
    })
  }catch(error){
    res.status(500).send({"message":error})
  }
}

// deletes the Recipe by id in collection
deleteRecipe = async (req,res)=>{
  try{
    let deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
    if(!deletedRecipe){
      return res.status(400).send({"message":"Recipe with this id not Found"})
    }
    res.status(200).send({
      "message": "Recipe deleted successfully",
      deletedRecipe
    })
  }catch(error){
    res.status(500).send({"message":"Some internal error"})
  }
}

module.exports = { createRecipe,getAll,getRecipeById,updateRecipe,deleteRecipe }