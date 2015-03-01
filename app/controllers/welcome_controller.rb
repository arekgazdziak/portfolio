class WelcomeController < ApplicationController

  def index
  	@title = "Welcome"
  	@article = Article.last
  end


end
