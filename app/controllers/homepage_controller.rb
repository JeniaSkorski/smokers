class HomepageController < ApplicationController
  def homepage
    #goes to homepage.html.erb, shows form
    #gets params from homepage form, in database filters places, goes to places_filter.html.erb

  end

  def show_selected
    #sends form to selected view

    #raise params.to_s
    @city = City.where(:name => params["name"]).first if I18n.locale == :en
    @city = City.where(:h_name => params["h_name"]).first if I18n.locale == :he
    redirect_to "/" + I18n.locale.to_s + "/cities/" + @city.name
  end
  
  def contact
  end
  
  def deliver_mail
    ContactMailer::email(params['message'], params['address'], params['name']).deliver
   
    redirect_to "/"
  end
end
