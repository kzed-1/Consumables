json.extract! recipe, :id, :author_id, :title, :body, :created_at

json.photosUrls recipe.photos.map { |file| url_for(file) }


