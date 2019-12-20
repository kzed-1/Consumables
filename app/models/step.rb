# == Schema Information
#
# Table name: steps
#
#  id         :bigint           not null, primary key
#  recipe_id  :integer          not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord

    # validates :title, :body, presence: true 

    belongs_to :recipe, 
        primary_key: :id,
        foreign_key: :recipe_id,
        class_name: :Recipe

    has_many_attached :photos

        
end
