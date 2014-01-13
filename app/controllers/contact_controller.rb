class ContactController < ApplicationController
  def contact
  end

  def recommend
  end

def deliver_mail

    ContactMailer::email(params['message'], params['address'], params['name'], params['place_name'], params['place_address']).deliver

    redirect_to "/"
  end


end