class User < ApplicationRecord
    has_many :watches
    has_many :auctions,  -> { uniq }, :through => :watches

end
