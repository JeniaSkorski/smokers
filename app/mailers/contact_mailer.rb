class ContactMailer < ActionMailer::Base
  default from: "podophobia@gmail.com"

 def email(message, address, name)
    @message=message
    @address=address 
    @name=name  
   
    mail(to: "podophobia@gmail.com", subject: 'Mail from smoke site')
  end
end