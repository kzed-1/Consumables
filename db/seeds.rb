# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Recipe.destroy_all
Step.destroy_all

user = User.create({username: "d3", email:"d3", password:"hunter2"})


recipe = Recipe.create!({author_id: user.id, title: "make apple pie", body: "how to make apple pie"})


# debugger
Step.create!({recipe_id: recipe.id, title:"cut apple", body:"wash all the apples, then cut them."})
# debugger
Step.create(recipe_id: recipe.id, title: "make crust", body:"cill crust on plate")
Step.create(recipe_id: recipe.id, title: "cover pie with layer", body:"put the layer on the pie")
Step.create(recipe_id: recipe.id, title: "put pie in oven", body:"cook pie at 350")