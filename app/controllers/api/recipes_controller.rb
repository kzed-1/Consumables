class Api::RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render :show
        else
            render json: @recipe.errors.full_messages
        end 
    end 

    private 

    def recipe_params 
        params.require(:recipe).permit(:title, :body)
    end

end
