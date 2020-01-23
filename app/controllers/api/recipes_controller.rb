class Api::RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
  
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render :show
        else
            render json: @recipe.errors.full_messages, status: 401
        end 
    end 

    def show 
        @recipe = Recipe.find(params[:id])
    end

    def update
        @recipe = Recipe.find(params[:id])
        if @recipe.update_attributes(recipe_params)
            render :show
        else 
            render json: @recipe.errors.full_messages, status: 422
        end 
    end
    
    def destroy 
        @recipe = Recipe.find(params[:id])

        if params[:attachment_id]
            if @recipe.photos.find_by_id(params[:attachment_id]).purge
                render :show
            end 
        else
            if @recipe.destroy           
                render :show
            else 
                render @recipe.errors.full_messages, status: 404
            end 
        end 
    end 

    def search 
        @recipes = Recipe.search_by_title(params[:query])
        render :index
    end 

    private 

    def recipe_params 
        params.require(:recipe).permit(:title, :body, :author_id, photos: [])
    end

end
