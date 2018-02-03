class CreateMovieActors < ActiveRecord::Migration[5.1]
  def change
    create_table :movie_actor do |t|
      t.timestamps
      t.belongs_to :actor
      t.belongs_to :movie
    end
  end
end
