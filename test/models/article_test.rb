require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
 
  def setup
    @article = Article.new(title: "Title", text: "Text")	
  end

  test "title should be present" do
  	@article.title = ""
  	assert_not @article.valid?
  end

  test "title should have maximum 50 characters" do
    @article.title = "a" * 51
    assert_not @article.valid?
  end

  test "title should be valid" do
    @article.title = "title"
    assert @article.valid?
  end

  test "text should be present" do
    @article.text = ""
    assert_not = @article.valid?
  end

  test "text should be valid" do 
    @article.text = "Maybe we wil see days when Ruby development will be profit"
    assert @article.valid?
  end

  test "should destroy the article" do
    @article.destroy
  end

end
