class Cocktail < ApplicationRecord
  # active storage: cette ligne permettra de faire @cocktail.photo...
  has_many_attached :photos

  # validations
  validates :name, presence: true, uniqueness: true
  validates :photo, presence: true

  # associations
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
end
