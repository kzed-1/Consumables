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
        json.set! step.id do 
            json.id step.id
            json.recipe_id step.recipe_id
            json.title step.title
            json.body step.body
            json.created_at step.created_at
            json.updated_at step.updated_at
            json.photosUrls step.photos.map { |file| url_for(file) }
            json.stepImages step.photos.map {|file| file.id }
        end
    end
end 

