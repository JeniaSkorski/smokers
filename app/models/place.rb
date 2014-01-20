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
      r = (ratings.sum(:score).to_f / ratings.size).round
    end
    #raise r.to_s
  end

end
