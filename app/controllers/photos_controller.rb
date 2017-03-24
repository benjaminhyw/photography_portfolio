class PhotosController < ApplicationController

  before_action :set_page, only: [:index, :next]

  def index
    @pics = Photo.order(:id).limit(@pics_per_page).offset(@page * @pics_per_page)

  end

  def next
    @pics = Photo.find_pics_on_page(@page, @pics_per_page)
    render :index
  end

  private
    def set_page
      @photos = Photo.all
      @page = params[:id].to_i
      @pics_per_page = 3
      @total_pic_qty = (@photos.count / @pics_per_page)
      @page_max = @total_pic_qty + 1

      if @page != 0
        @link = @page + 1
      else
        @link = 2
      end
    end
end
