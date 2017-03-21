class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @pics = Photo.order(:id).limit(2)
  end

end
