const mongoose  =  require('mongoose')

// defining recipe schema with validation for respective fields
const recipeSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: true
  },
  ingredients:{
    type: String,
    required: true 
  },
  steps:{
    type: Number,
    required: true,
    validate(value){
      if(value<0){
        throw new Error("Steps should be positive number")
      }
    }
  },
  foodtype:{
    type: String
  }
})

const Recipe = mongoose.model('Recipe',recipeSchema)

module.exports = Recipe