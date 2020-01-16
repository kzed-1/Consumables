json.step do 
    json.partial! "api/steps/step", step: @step
end

json.images do 
    @step.photos.each do |file|
        json.set! file.id do 
            json.attachment_id file.id
            json.name file.name
            json.blob_id file.blob_id
        end
    end
end 