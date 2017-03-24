class Photo < ApplicationRecord
  belongs_to :user

  def self.find_pics_on_page(page, amount)
    pic_range = (((page * amount) - amount) + 1) .. (page * amount)

    Photo.where({
      id: pic_range
    })
  end
end
