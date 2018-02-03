class ChangePriceToDecimal < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :price
    add_column :items, :price, :decimal
  end
end
