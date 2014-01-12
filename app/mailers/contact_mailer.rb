class ContactMailer < ActionMailer::Base
  default from: "podophobia@gmail.com"

 def email(message, address, name, place_name, place_address)
    @message=message
    @address=address 
    @name=name  
    @place_name =place_name
    @place_address =place_address
    mail(to: "podophobia@gmail.com", subject: 'Mail from smoke site')
  end
end