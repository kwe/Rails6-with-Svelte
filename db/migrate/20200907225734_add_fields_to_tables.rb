class AddFieldsToTables < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :auctions, :product, :string
  end
end
