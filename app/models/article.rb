class Article < ActiveRecord::Base
  has_many :comments
	validates :title, presence: true, length: { maximum: 50 }
	validates :text, presence: true
end
