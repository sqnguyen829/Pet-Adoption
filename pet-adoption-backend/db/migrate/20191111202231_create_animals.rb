class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.string :image
      t.string :gender
      t.integer :age
      t.string :status
      t.string :description
      t.timestamps
    end
  end
end
