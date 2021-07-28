Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users, only: :update

    resources :books do
      resources :days
    end

    resources :days do
      resources :cols
    end

    resources :cols do
      resources :cards
    end
  end


end