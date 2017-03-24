class PhotosController < ApplicationController

  before_action :set_page, only: [:index, :next]

  def index
    @photos = Photo.all
    @pics = Photo.order(:id).limit(3).offset(@page * 3)
  end


  # This method is supposed to fire when user clicks the next button/link.  It's supposed to simply display the next few images.. but currently only partially displays new images
  def next

    # The instance variables below were regular variables, no instance prior to removing "next" link and route.  You may have to play with this idea a little.
    @page ||= 1
    @page += 1



    # I'm playing around with this right now... the 5 currently shows 5 pictures, which is fine but then clicking again won't show any new pics.. so maybe this isn't actually where the problem is.. I think it has to do with page?
    @pics = Photo.find_pics_on_page(@page, 3)
    render :index
  end

  private
    def set_page
      @page = params[:page] || 0
    end
end
