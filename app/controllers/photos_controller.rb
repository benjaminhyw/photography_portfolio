class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @pics = Photo.order(:id).limit(2)
  end

  private
    def set_page
      @page = params[:page] || 0
    end
end
