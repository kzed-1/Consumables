# == Schema Information
#
# Table name: recipes
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Recipe < ApplicationRecord

    validates :author_id, :title, :body, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :steps,
        primary_key: :id,
        foreign_key: :recipe_id,
        class_name: :Step,
        dependent: :destroy

    has_many_attached :photos

    def self.find_by_recipe_name(input)
        Recipe.where("title ILIKE ?", "%#{input}%")
    end

    def self.find_by_userid(userid)
        Recipe.where("author_id = ? ", userid)
    end
    
end
