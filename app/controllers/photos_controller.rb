class PhotosController < ApplicationController

  before_action :set_page, only: [:index]

  def index
    @photos = Photo.all
    @pics = Photo.order(:id).limit(2)
  end

  private
    def set_page
      @page = params[:page] || 0
    end
end
