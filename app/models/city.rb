class City < ActiveRecord::Base
  has_many :places
  def to_param
    name
  end

  def location
  
    location_lat=places.map(& :latitude).inject{ |sum, el| sum + el }.to_f / places.size
    location_longitude=places.map(& :longitude).inject{ |sum, el| sum + el }.to_f / places.size
    return [location_lat,location_longitude]
  end
  
  def self.make_name_array
    names = City.pluck(:name)
    arr = Array.new
    names.each {|n| arr << [n.gsub('-', ' '),n] }
    return arr
  end  
  
end

