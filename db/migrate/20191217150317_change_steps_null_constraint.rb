class ChangeStepsNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :steps, :title, :string, :null => true
    change_column :steps, :body, :text, :null => true 
  end
end
