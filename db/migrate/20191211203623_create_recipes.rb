class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.integer :author_id, null: false 
      t.string :title, null: false
      t.string :name, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :recipes, :author_id
    add_index :recipes, :title
  end
end
