json.array!(@places) do |place|
  json.extract! place, :city_id, :area_id, :category_id, :name, :address, :details, :latitude, :longitude, :website
  json.url place_url(place, format: :json)
end
