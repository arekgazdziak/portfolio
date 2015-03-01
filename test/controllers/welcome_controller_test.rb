require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  
  test "should get index" do
    get :index
    assert_response :success
    assert_select 'title', "Welcome | Blog"
  end

end
