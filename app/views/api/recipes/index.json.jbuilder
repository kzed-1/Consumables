@recipes.each do |recipe|
    json.set! recipe.id do 
        json.partial! 'recipe', recipe: recipe
        json.step_instruction do
            steps_array = []
            recipe.steps.each do |step|
                steps_array.push(step.id)
            end 
            json.array! steps_array
        end
    end
end




