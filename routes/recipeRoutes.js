const express =  require('express')
const { createRecipe,getAll,getRecipeById,updateRecipe,deleteRecipe } = require('../controller/recipesController')

const router = express.Router()

// API endpoints in Postman with sample requests and Responses
router.post('/addrecipe',createRecipe)
/* POST method http://localhost:3000/addrecipe in Body
{
  "name": "Biryani",
  "ingredients": "Rice,Chicken",
  "steps": 8,
  "foodtype": "non-veg"
}
Response:
{
  "name": "Biryani",
  "ingredients": "Rice,Chicken",
  "steps": 8,
  "foodtype": "non-veg",
  "_id": "67303a663cad91fb34382f22",
  "__v": 0
}*/
router.get('/recipes',getAll)
/* GET method http://localhost:3000/recipes 
Response:
[
    {
        "_id": "67303903bda025b08f22b341",
        "name": "Chapati",
        "ingredients": "Wheate,Oil",
        "steps": 3,
        "foodtype": "veg",
        "__v": 0
    },
    {
        "_id": "673039973cad91fb34382f18",
        "name": "Masal Dosa",
        "ingredients": "Rice,Potato",
        "steps": 6,
        "foodtype": "veg",
        "__v": 0
    },
    {
        "_id": "67303a663cad91fb34382f22",
        "name": "Biryani",
        "ingredients": "Rice,Chicken",
        "steps": 8,
        "foodtype": "non-veg",
        "__v": 0
    }
]*/
router.get('/recipes/:id',getRecipeById)
/* GET method http://localhost:3000/recipes/67303a663cad91fb34382f22
Response:
{
    "_id": "67303a663cad91fb34382f22",
    "name": "Biryani",
    "ingredients": "Rice,Chicken",
    "steps": 8,
    "foodtype": "non-veg",
    "__v": 0
}*/
router.put('/recipes/:id',updateRecipe)
/* PUT method http://localhost:3000/recipes/673039973cad91fb34382f18 in Body
{
  "steps":7
}
Response:
{
    "message": "Recipe upadated successfully",
    "alteredRecipe": {
        "_id": "673039973cad91fb34382f18",
        "name": "Masal Dosa",
        "ingredients": "Rice,Potato",
        "steps": 7,
        "foodtype": "veg",
        "__v": 0
    }
}*/
router.delete('/recipes/:id',deleteRecipe)
/* DELETE method http://localhost:3000/recipes/673039973cad91fb34382f18
Response:
{
    "message": "Recipe deleted successfully",
    "deletedRecipe": {
        "_id": "673039973cad91fb34382f18",
        "name": "Masal Dosa",
        "ingredients": "Rice,Potato",
        "steps": 7,
        "foodtype": "veg",
        "__v": 0
    }
}*/

module.exports = router;