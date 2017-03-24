class PhotosController < ApplicationController

  before_action :set_page, only: [:index, :next]

  def index
    @photos = Photo.all
    @pics = Photo.order(:id).limit(3).offset(@page * 3)
  end

  def next
    @page += 1
    @pics = Photo.find_pics_on_page(@page, 3)
    render :index
  end

  private
    def set_page
      @page = params[:id].to_i
    end
end
