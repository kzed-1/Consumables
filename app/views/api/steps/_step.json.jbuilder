json.extract! step, :id, :recipe_id, :title, :body, :created_at, :updated_at

json.photosUrls step.photos.map { |file| url_for(file) }
