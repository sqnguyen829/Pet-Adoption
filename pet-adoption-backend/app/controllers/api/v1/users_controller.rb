class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users, except: [:created_at, :updated_at], include: :animals, except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, except: [:created_at, :updated_at], include: :animals, except: [:created_at, :updated_at]
        else 
            render json: {message: 'User not found'}
        end
    end

    def create
        user = User.create(user_params)
    end

    private

    def animal_params
        params.require(:user).permit(:user_name,:first_name,:last_name,:email,:address,:phone_num)
    end
end
