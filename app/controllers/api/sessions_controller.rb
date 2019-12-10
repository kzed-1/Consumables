class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user 
            login(@user)
            render "api/users/show"
        else 
            render json: ["bad username password combo"], status: 401
        end 
    end

    def destroy 
        # debugger
        @user = current_user
        # debugger
        if @user
            # debugger
            logout 
            # debugger
            render json: "api/users/show"
        else 
            render json: ["Not signed in"], status: 404 
        end
    end 
    
end