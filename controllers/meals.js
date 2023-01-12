import { Meal } from "../models/meal.js"

function newMeal(req, res){
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}


export {
  newMeal as new,

}