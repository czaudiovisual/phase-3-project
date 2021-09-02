class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :theater_id
      t.string :description
      t.string :img_url
    end
  end
end
