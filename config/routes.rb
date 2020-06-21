Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'react_app#index'

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]
      post 'contact', to: 'contact#send_email'
      # resources :contact, only: [:create]
    end
  end
end
