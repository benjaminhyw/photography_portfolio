class AddPhotosToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :photos, :text, :array => true, :default => [].to_yaml
  end
end
