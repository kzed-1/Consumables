json.recipe do
    json.partial! 'recipe', recipe: @recipe 
end

json.user do 
    json.partial! "api/users/user", user: @recipe.author
end


