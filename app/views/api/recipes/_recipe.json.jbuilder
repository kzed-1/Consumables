json.extract! recipe, :id, :author_id, :title, :body, :created_at

json.photosUrls recipe.photos.map { |file| url_for(file) }

json.recipeImages recipe.photos.map { |file| file.id }
