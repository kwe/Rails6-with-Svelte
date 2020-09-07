class User < ApplicationRecord
    has_many :watches
    has_many :auctions, :through => :watches

end
