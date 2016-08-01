class CityStatesController < ApplicationController

  def new
    @location = Location.new
    render :_new
  end

  def create
    @location = Location.new(destination: params[:destination], zipcode: params[:zipcode], city_state: true, current_location: params[:current_location])
    if @location.save
      if request.xhr?
        render :_show, layout: false, locals:{location: @location}
      else
        redirect_to city_state_path
      end
    else
      if request.xhr?
        @errors = Error.full_messages
        redirect_to :_new, layout: false, locals:{location: @location, errors: @errors}
      else
        @errors = Error.full_messages
        redirect_to(:new)
      end
    end
  end

  def show
    @location = location.find(params[:id])
    if request.xhr?
      render :_show, layout: false, locals:{location: @location}
    else
      render :show
    end
  end

end
