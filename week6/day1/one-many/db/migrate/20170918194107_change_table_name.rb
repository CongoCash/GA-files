class ChangeTableName < ActiveRecord::Migration[5.1]
  def change
    rename_table :movie_actor, :movie_actors
  end
end
