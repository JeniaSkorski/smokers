ActiveAdmin.register Place do

    
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
   permit_params :city_name, :name, :city_id,  :category_id, :h_name, :address, :h_address, :h_details, :details,  :latitude, :longitude, :website
   
  
end
