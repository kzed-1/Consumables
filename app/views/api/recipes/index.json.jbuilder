@recipes.each do |recipe|
    json.set! recipe.id do 
        json.partial! 'recipe', recipe: recipe
        json.set! step_instruction do 
            json.array! recipe.steps
        end
    end
end

