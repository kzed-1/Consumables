json.recipe do 
    json.partial! 'recipe', recipe: @recipe 
    json.author_name @recipe.author.username

    json.steps_instruction do
        steps_array = []
        @recipe.steps.each do |step|
            steps_array.push(step.id)
        end 
        json.array! steps_array
    end
end

json.steps do 
    @recipe.steps.each do |step|
        json.set! step.id, step
    end
end 
