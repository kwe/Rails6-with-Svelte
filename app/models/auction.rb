class Auction < ApplicationRecord
    has_many :watches
    has_many :users,  -> { uniq }, :through => :watches
end
