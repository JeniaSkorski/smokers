class ReviewsController < ApplicationController
 
  def create
 
   
    @place = Place.find(params[:place_id])
    @review = @place.reviews.create!(review_params)
    redirect_to @review.place, notice: "Review has been created."
  end
end

def review_params
    params.require(:review).permit(:content, :name, :rating, :place_id, :authenticity_token, :commit)
  end