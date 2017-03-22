class Photo < ApplicationRecord
  belongs_to :user

  def self.find_pics_on_page(page, amount)
    Photo.where({
      id: (((page * amount) - amount) ... (page * amount))
    }) # you can figure this out, depending on if you want to rank by updated_at or other filter
  end
end
