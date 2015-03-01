require 'test_helper'

class ArticlesControllerTest < ActionController::TestCase
  
  def setup
    @article = articles(:article_sample)
  end
  
  test "should get articles page" do
    get :index
    assert_response :success
    assert_select 'title', "Articles | Blog"
  end

  test "should get articles/new page" do
    get :new
    assert_response :success
    assert_select 'title', "New Article | Blog"
  end

  test "should create a simple post" do 
    get :new
    assert_response :success
    post :create, article: {title: "Some title", text: "Some.text"}
    assert_redirected_to article_path(assigns(:article))
    assert_response :redirect
  end

  test "should go back to articles from new article page" do
    get :new
    assert_response :success
    assert_template 'articles/new'
    assert_select "a[href=?]", articles_path
    get :index
    assert_response :success
  end

  test "should show chosen article" do
    get :show, id: @article
    assert_response :success
  end

  test "should edit article" do
    get :edit, id: @article
    assert_response :success
    @article.title = "Some title with some text"
    @article.text = "Some text with Some text"
    patch :update, id: @article, article: { title: @article.title, text: @article.text }
    assert_response :redirect
  end

  end
