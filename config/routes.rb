Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :JSON} do 
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :recipes do 
      collection do 
        get 'search'
      end 
    end 
    resources :steps 
    # get 'search', action: :search, controller: 'recipes'
  end
end
