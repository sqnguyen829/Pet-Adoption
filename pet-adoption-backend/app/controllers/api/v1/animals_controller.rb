class Api::V1::AnimalsController < ApplicationController
    def index
        animals = Animal.all
        render json: animals, except: [:created_at, :updated_at]
    end

    def show
        animal = Animal.find_by(id: params[:id])
        if animal 
            render json: animal, except: [:created_at, :updated_at]
        else
            render json: {message: 'animal not found'}
        end
    end
end
