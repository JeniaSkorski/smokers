ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "podophobia",
  :password             => "lyrabelacqua",
  :authentication       => "plain",
  :enable_starttls_auto => true
}