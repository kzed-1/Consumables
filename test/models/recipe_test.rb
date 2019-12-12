# == Schema Information
#
# Table name: recipes
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  name       :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
