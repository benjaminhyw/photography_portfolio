Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'photos#index'

  # These next two routes exist because I am trying to figure out next page business.  These might change.
  get '/', to: 'photos#index'
  # get 'photos/next', 'photos#next', as: 'next'

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end


end
