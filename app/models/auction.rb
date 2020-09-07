class Auction < ApplicationRecord
    has_many :watches
    has_many :users, :through => :watches
end
