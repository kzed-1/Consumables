json.extract! recipe, :id, :author_id, :title, :body

json.steps_instruction do
    steps_array = []
    recipe.steps.each do |step|
        steps_array.push(step.id)
    end 
    json.array! steps_array
end

