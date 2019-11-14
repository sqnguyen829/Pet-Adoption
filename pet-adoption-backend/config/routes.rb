Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :sightings
  # get '/birds' => 'birds#index'
  # namespace :api do 
  #   namespace :v1 do 
  #       resources :users, only: [:index]
  #       resources :events, only: [:index]
  #   end
  # end
  namespace :api do 
    namespace :v1 do 
        resources :users
        resources :animals
        resources :listings
    end
  end
end
