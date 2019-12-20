class Api::StepsController < ApplicationController

    # def index 
    #     @steps = Step.all
    # end

    def create 
        @step = Step.new(step_params)

        if @step.save
            render :show
        else 
            render json: @step.errors.full_messages, status: 401
        end 
    end

    def show 
        @step = Step.with_attached_photos.find(params[:id])
    end 

    def update 
        @step = Step.find(params[:id])
        
        if @step.update_attributes(step_params)
            render :show
        else 
            render json: @step.errors.full_messages, status: 401
        end
    end

    def destroy 
        @step = Step.find(params[:id])
        if @step.destroy 
            render :show
        else 
            render @step.errors.full_messages, status: 404 
        end 
    end 

    private 

    def step_params 
        params.require(:step).permit(:title, :body, :recipe_id, photos: [])
    end
    
end