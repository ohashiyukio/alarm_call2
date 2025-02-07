Rails.application.routes.draw do
  root "alarms#index"
  resources :alarms, only: [:index, :new, :create, :show]
end
