class User < ApplicationRecord
    has_many :listings
    has_many :animals, through: :listings
end
