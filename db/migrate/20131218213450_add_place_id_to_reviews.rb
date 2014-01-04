class AddPlaceIdToReviews < ActiveRecord::Migration
  def change

    add_column :reviews, :place_id, :integer
  end
end
