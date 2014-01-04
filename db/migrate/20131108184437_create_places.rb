class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :city_id
      t.string :name
      t.string :h_name
      t.string :address
      t.text :details
       t.string :h_address
      t.text :h_details
      t.float :latitude
      t.float :longitude
      t.string :website

      t.timestamps
    end
  end
end
