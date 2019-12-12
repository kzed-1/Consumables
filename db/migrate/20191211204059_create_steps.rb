class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :recipe_id, null: false 
      t.string :title, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :steps, :recipe_id
  end
end
