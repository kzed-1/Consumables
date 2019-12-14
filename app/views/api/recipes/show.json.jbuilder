json.recipe do 
    json.partial! 'recipe', recipe: @recipe 
    json.author_name @recipe.author.username
end

json.steps do 
    @recipe.steps.each do |step|
        json.set! step.id, step
    end
end 
