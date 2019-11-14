class Api::V1::ListingsController < ApplicationController

    def index
        listings = Listing.all
        render json: listings, except: [:created_at, :updated_at]
    end

    def show
        listing = Listing.find_by(id: params[:id])
        if listing 
            render json: listing, except: [:created_at, :updated_at]
        else
            render json: {message: 'Listing not found'}
        end
    end

    def create
        listing = Listing.create(listing_params)
    end

    private

    def listing_params
        params.require(:listing).permit(:user_id,:animal_id)
    end
end
