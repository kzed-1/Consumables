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
        if @recipe.destroy 
            render :show
        else 
            render @recipe.errors.full_messages, status: 404
        end 
    end 

    private 

    def recipe_params 
        params.require(:recipe).permit(:title, :body, :author_id)
    end

end
