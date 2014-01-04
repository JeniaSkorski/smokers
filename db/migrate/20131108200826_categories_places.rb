class CategoriesPlaces < ActiveRecord::Migration
  def change
    create_table :categories_places, :id =>false do |t|
      t.integer :category_id
      t.integer :place_id
    end
  end
end
