class Place < ActiveRecord::Base

  belongs_to :city
  has_and_belongs_to_many :categories
  has_many :reviews
  geocoded_by :address
  after_validation :geocode
  has_many :ratings
  def average_rating
    if ratings.size==0
    return 0

    else
      ratings.sum(:score) / ratings.size
    end
  end

end
