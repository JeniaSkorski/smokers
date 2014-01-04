class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
 #raise params[:user].to_s
   # @user = User.new(params[:user])
    @user = User.new()
    @user.email = params[:user]["email"]
    @user.password = params[:user]["password"]
    @user.password_confirmation = params[:user]["password_confirmation"]
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_url, notice: "Thank you for signing up!"
    else
      render "new"
    end
  end
   private
   
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit( :email, :password, :password_confirmation)
  end
  
end
