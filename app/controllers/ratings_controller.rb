class RatingsController < ApplicationController

  def update
     logger.debug "bungwipe " + params.to_s + "pin " + current_user.id.to_s
    @rating = Rating.where(:user_id => current_user.id, :place_id => params["place_id"]).first_or_initialize
    @rating.score = params["score"]
    
    if @rating.save
      respond_to do |format|
        format.js
      end
    end
    
  end

end