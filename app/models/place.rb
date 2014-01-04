class Place < ActiveRecord::Base
  
  
  belongs_to :city
  has_and_belongs_to_many :categories
  has_many :reviews
  geocoded_by :address
  after_validation :geocode
end
