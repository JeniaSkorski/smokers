class User < ActiveRecord::Base
  has_secure_password
  has_many :ratings
  validates_uniqueness_of :email
  
end
