class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

  def current_user 
    # return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    # debugger
    current_user.reset_session_token!
    # debugger
    session[:session_token] = nil
    # debugger
    @current_user = nil 
    # debugger
  end

  def require_login
    unless current_user
      render json: { base: ['bad username, password combo']}, status: 401 
    end 
  end

end