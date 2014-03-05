class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :edit, :update, :destroy]
  # GET /places
  # GET /places.json
  def index
    @places = Place.all
  end

  # GET /places/1
  # GET /places/1.json
  def show
    if current_user
      if Rating.where(place_id: @place.id, user_id: current_user.id).first
        @rating = Rating.where(place_id: @place.id, user_id: @current_user.id).first
      else
        @rating = Rating.create(place_id: @place.id, user_id: current_user.id, score: 0)
      end
    end
  end

  # GET /places/new
  def new
    @place = Place.new

  end

  # GET /places/1/edit
  def edit

  end

  # POST /places
  # POST /places.json
  def create
    id = City.where(:name =>params['city_name']).first.id
    params['place']['city_id']=id

    @place = Place.new(place_params)
    categories = Category.where(:name=> params.keys)
    @place.categories = categories
    respond_to do |format|
      if @place.save
        format.html { redirect_to @place, notice: 'Place was successfully created.' }
        format.json { render action: 'show', status: :created, location: @place }
      else
        format.html { render action: 'new' }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /places/1
  # PATCH/PUT /places/1.json
  def update

    categories = Category.where(:name=> params.keys)

    id = City.where(:name =>params['city_name']).first.id
    params['place']['city_id']=id
    @place.categories = categories
    respond_to do |format|
      if @place.update(place_params)
        format.html { redirect_to @place, notice: 'Place was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /places/1
  # DELETE /places/1.json
  def destroy
    @place.destroy
    respond_to do |format|
      format.html { redirect_to places_url }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_place
    @place = Place.find(params[:id])
  end
  
  # Never trust parameters from the scary internet, only allow the white list through.
  def place_params
    params.require(:place).permit(:city_name, :name, :city_id,  :category_id, :h_name, :address, :h_address, :h_details, :details,  :latitude, :longitude, :website)
  end

  def review_params
    params.require(:review).permit(:content, :name, :rating, :place_id, :authenticity_token, :commit)
  end
end
