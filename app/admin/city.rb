ActiveAdmin.register City do
    before_filter :only => [:show, :edit, :update, :destroy] do
        @city = City.find_by_name(params[:id])
    end

  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
   permit_params :name, :h_name
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  
end
